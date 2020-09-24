// Adding an offset to a geometry
// Make sure to place the offset attribute after the geometry attribute (!)
AFRAME.registerComponent('offset', 
{
  schema: { type: 'vec3' },
  update: function() {
    let offset = this.data;
    let g = this.el.getObject3D('mesh').geometry;
    g.translate( offset.x, offset.y, offset.z);
  }
});