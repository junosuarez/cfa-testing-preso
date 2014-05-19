describe('app.button', function () {

  afterEach(function () {
    [].slice.call(document.querySelectorAll('button'))
      .forEach(function (el) {
        document.body.removeChild(el)
      })
  })


  it('adds a button to the dom', function () {

    document.querySelectorAll('button').length
      .should.equal(0)

    app.button()

    document.querySelectorAll('button').length
      .should.equal(1)

  })


  it('returns the button element', function () {
    
    var button = app.button()

    button
      .should.be.instanceof(Element)
  })


  it('changes the text when clicked', function () {

    var button = app.button()

    var pre = button.textContent

    button.click()

    var post = button.textContent

    pre.should.not.equal(post)
    post.should.equal('clicked')

  })

})