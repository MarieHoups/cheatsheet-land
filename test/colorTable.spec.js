
var React = require('react'),
    expect = require('chai').expect,
    shallow = require('enzyme').shallow;

var ColorTable = require('../src/components/colorTable');

describe("<ColorTable/>", function() {
  it("contains a table", function() {
    expect(shallow(<ColorTable />).contains(<table><tbody></tbody></table>)).to.equal(true);
  });
});
