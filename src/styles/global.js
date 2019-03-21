import { injectGlobal } from "styled-components";

injectGlobal`
*{
margin:0;
padding:0;
box-sizing:border-box;
outline:0;

}

htlm,body,#root
{
  height:100%;
}

body{
  text-rendrering:optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background:#181818;
  font-family:'Montserrat',sans-serif;
  color:#fff
}

`;
