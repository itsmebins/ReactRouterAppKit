import Offers from '../Offers';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  ...state,
  tags: state.home.tags,
  token: state.common.token,
  offers: state.offers.offers
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, payload) => dispatch({ type: 'CHANGE_TAB', tab, payload })
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
        </ul>
      </div>
      <Offers offers={props.offers}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
