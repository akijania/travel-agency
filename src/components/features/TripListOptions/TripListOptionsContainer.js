import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, createActionAddTag, createActionRemoveTag, createActionChangeDurationTo, createActionChangeDurationFrom } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  createActionAddTag: tag => dispatch(createActionAddTag(tag)),
  createActionRemoveTag: tag => dispatch(createActionRemoveTag(tag)),
  createActionChangeDurationTo: value => dispatch(createActionChangeDurationTo(value)),
  createActionChangeDurationFrom: value => dispatch(createActionChangeDurationFrom(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
