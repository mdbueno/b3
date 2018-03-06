'use strict';



(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('b3'));

    beforeEach(inject(function(_$controller_) {
      

      vm = _$controller_('menuCtrl');
    }));

    it('should attach a list of filmes to the scope', function () {
      expect(vm.filmes.length).toBe(3);
    });

    
  });
})();
