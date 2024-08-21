"use server"
import { patchShaders } from "gl-noise";

export async function makeStaticProps() {
    return ()=>{
        patchShaders(/* glsl */ `
            varying vec2 vUv;
            varying vec3 vPosition;
            uniform float uThickness;
            uniform vec3 uColor;
            uniform float uProgress;
            
            
            void main() {
              gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
              // float noise = gln_sfbm(vUv, opts); // THE ORIGINAL CODE FROM THE TUTORIAL
              float noise = gln_sfbm(vPosition, opts); //  use the world position instead of the uv for a better effect working on all objects
              
              noise = gln_normalize(noise);
          
              float progress = uProgress;
          
              float alpha = step(1.0 - progress, noise);
              float border = step((1.0 - progress) - uThickness, noise) - alpha;
              
              csm_DiffuseColor.a = alpha + border;
              csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
            }`);
    }
  }