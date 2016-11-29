import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('soar-calculator', function() {
  setupComponentTest('soar-calculator', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  it('renders', function() {
    // creates the component instance
    var component = this.subject();

    // renders the component on the page
    this.render();
    expect(component._state).to.equal('inDOM');
  });
});
