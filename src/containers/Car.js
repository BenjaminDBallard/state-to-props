import { connect } from "react-redux";
import Car from '../components/Car'

function mapStateToProps(state) {
    return({
        cars: state.cars
    })
}

export default connect(mapStateToProps)(Car)