/*jshint expr: true */
/*global describe, it, expect */
'use strict';
(function () {
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(false).to.be.false;
      });
    });
  });
})();
