import { connect } from 'react-redux';
import Calculator from '../component/Calculator';
import press from '../action/press';

const mapStateToProps = state => ({
    value: state.entry,
    history: state.history
});

const mapDispatchToProps = dispatch => ({
    press: key => dispatch(press(key))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);