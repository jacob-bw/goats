import React from 'react';
import PropTypes from 'prop-types';

import Goat from '../goat/goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    butts: PropTypes.arrayOf(goatShape.goatShape),
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  render() {
    const myGoats = this.props.butts;
    const { freeGoat } = this.props;
    const { useGoat } = this.props;

    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} freeGoat={freeGoat} useGoat={useGoat} />);

    return (
      <div className="container d-flex">
        <div className="row-3">
          <div className="col">
            <div className="goatCorral">
              {goatCards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoatCorral;
