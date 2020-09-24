// See: https://github.com/aframevr/aframe/blob/master/src/geometries/cylinder.js
var degToRad = THREE.Math.degToRad;

AFRAME.registerGeometry('link', {
  schema: {
    height: {default: 1, min: 0},
    openEnded: {default: false},
    radius: {default: 1, min: 0},
    segmentsHeight: {default: 18, min: 1, type: 'int'},
    segmentsRadial: {default: 36, min: 3, type: 'int'},
    thetaLength: {default: 360, min: 0},
    thetaStart: {default: 0}
  },

  init: function (data) {
    this.geometry = new THREE.CylinderGeometry(
        data.radius, data.radius, data.height, data.segmentsRadial, data.segmentsHeight,
        data.openEnded, degToRad(data.thetaStart), degToRad(data.thetaLength));
    
        // fix offset
        this.geometry.translate(0, 0.2, 0);
  }
});
