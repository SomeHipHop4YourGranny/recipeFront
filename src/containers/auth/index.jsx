import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../../components/auth';
import { userActions } from '../../redux/actions';

function AuthContainer(props) {
  const { api } = props;

  const send = ({ type, data = {} }) => api({ type, data });
  return <Auth send={send} />;
}

AuthContainer.propTypes = {
  api: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ api: userActions.api }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
