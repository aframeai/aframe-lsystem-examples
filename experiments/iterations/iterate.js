AFRAME.registerComponent('iterate', {

    schema: {
      from: {type: 'number', default: 3.0},
      to: {type: 'number', default: 5},
      step: {type: 'number', default: 1},
      attribute: { type: 'string', default: 'lsystem' },
      property: { type: 'string', default: 'iterations' },
      loop: { default: true },
      dur: { default: 500 },
    },

    init: function() {
      this.timer = Date.now();
      let el = this.el;
      let attribute = this.data.attribute;
      let property = this.data.property;
      setTimeout(() => {
        //el.setAttribute(attribute, property, this.data.from);
        this.iter = this.el.getAttribute(attribute)[property];
      }, 0);

    },

    tick: function() {
      let now = Date.now();
      let timePassed = now - this.timer;
      if(timePassed > this.data.dur) {
        this.iter = this.iter + this.data.step;
        if(this.iter > this.data.to) {
          if(this.data.loop) {
            this.iter = this.data.from;
          }
        }
        this.el.setAttribute(this.data.attribute, this.data.property, this.iter);
        this.timer = Date.now();
      };
    }

  });