import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import { getTotals } from '../actions/totalsActions';
import PropTypes from 'prop-types';

class Totals extends Component {
    componentDidMount() {
        this.props.getTotals();
    }

    render() {
        const { totals } = this.props.totals;

        return(

            <div>
                <Container>
                    <div>
                        <h1>Global Totals</h1>
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Total Cases</th>
                                        <th>Total Deaths</th>
                                        <th>Total Recovered</th>
                                        <th>Today's Cases</th>
                                        <th>Today's Deaths</th>
                                        <th>Today's Recoveries</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-weight-bold">{totals.TotalConfirmed}</td> 
                                        <td className="font-weight-bold text-danger">{totals.TotalDeaths}</td>
                                        <td className="font-weight-bold text-success">{totals.TotalRecovered}</td>
                                        <td className="font-weight-bold">{totals.NewConfirmed}</td>
                                        <td className="font-weight-bold text-danger">{totals.NewDeaths}</td>
                                        <td className="font-weight-bold text-success">{totals.NewRecovered}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

Totals.propTypes = {
    getTotals: PropTypes.func.isRequired,
    totals: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    totals: state.totals
});

export default connect(mapStateToProps, { getTotals })(Totals);