// These aren't really sufficient...
Screw.Unit(function() {
  describe("ajaxQueue", function() {
    before(function() {
      $.ajaxQueue.reset();
    });
    
    it("exists", function() {
      expect($.ajaxQueue).to_not(be_undefined);
    });
    
    it("has currentRequest", function() {
      expect($.ajaxQueue.currentRequest).to(be_null);
    });
    
    it("has a queue", function() {
      expect($.ajaxQueue.queue).to(be_empty);
    });
    
    describe("post()", function() {
      it("adds to queue", function() {
        $.ajaxQueue.post('fixtures/post.html', {
          complete: function(res) {
            expect($.ajaxQueue.gotten).to(be_true);
            expect(res.responseText).to(equal, 'Your POST request was successful!');
          }
        });
      })
    });
    
    describe("get()", function() {
      it("adds to queue", function() {
        $.ajaxQueue.get('fixtures/get.html', {
          complete: function(res) {
            expect($.ajaxQueue.gotten).to(be_true);
            expect(res.responseText).to(equal, 'Your GET request was successful!');
          }
        });
      })
    });
    
    describe("put()", function() {
      it("adds to queue", function() {
        $.ajaxQueue.put('fixtures/put.html', {
          complete: function(res) {
            expect($.ajaxQueue.gotten).to(be_true);
            expect(res.responseText).to(equal, 'Your PUT request was successful!');
          }
        });
      })
    });
    
    describe("del()", function() {
      it("adds to queue", function() {
        $.ajaxQueue.del('fixtures/delete.html', {
          complete: function(res) {
            expect($.ajaxQueue.gotten).to(be_true);
            expect(res.responseText).to(equal, 'Your DELETE request was successful!');
          }
        });
      })
    });
  });
});