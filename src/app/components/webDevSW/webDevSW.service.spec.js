(function() {
  'use strict';

  describe('service webDevSW', function() {
    var webDevSW;

    beforeEach(module('b3'));
    beforeEach(inject(function(_webDevSW_) {
      webDevSW = _webDevSW_;
    }));

    it('should be registered', function() {
      expect(webDevSW).not.toEqual(null);
    });

    describe('getTec function', function() {
      it('should exist', function() {
        expect(webDevSW.getTec).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = webDevSW.getTec();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
