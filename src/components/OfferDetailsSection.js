
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  ...state.offers,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: 'OFFER_DETAIL_PAGE_LOADED', payload }),
  onUnload: () =>
    dispatch({ type: 'OFFER_DETAIL_PAGE_UNLOADED' })
});

class OfferDetail extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Offers.byId(this.props.params.id));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.currentViewingOffer) {
      return null;
    }

    return (
      <div className="article-page">

        <div className="banner">
          <div className="container">
            <h1>{this.props.currentViewingOffer.headline}</h1>
          </div>
        </div>
          <hr />
        <div className="article-actions">
        {this.props.currentViewingOffer.offer_conditions}
        </div>

        <div className="container page">

          <div className="row article-content">
            <div className="col-xs-12">
            </div>
          </div>

          <hr />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);
