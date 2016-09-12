// This file is auto-generated from 'node generateComponents.js' 

import omx = require('../../')

export class VideoRender extends omx.Component {
  constructor(name?: string) {
    super('video_render', name);
    this.setPorts(90, 0);
  }
  
  // ---- Text can be edited below this line --------
  setBufferCount (countIN: number) {
    var portdef = this.getParameter(this.in_port, omx.OMX_INDEXTYPE.OMX_IndexParamPortDefinition);
    portdef.nBufferCountActual = Math.max(countIN, portdef.nBufferCountMin);
    this.setParameter(this.in_port, omx.OMX_INDEXTYPE.OMX_IndexParamPortDefinition, portdef);
    return this;
  };
  // ---- Text can be edited above this line --------
}