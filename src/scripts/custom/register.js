(function($) {

  'use strict';

  $.fn.renderComponent = function(componentClass) {

    this.each(function() {
      var component = React.createFactory(componentClass);
      var data = $(this).data();
      ReactDOM.render(component({
        data
      }), $(this)[0]);
    });

  };

  // Register components with component containers
  $(function() {

    $('#component1').renderComponent(MyComponent1) // MyComponent1 component
    $('#component2').renderComponent(MyComponent2); // MyComponent2 component

  });

}(jQuery));
