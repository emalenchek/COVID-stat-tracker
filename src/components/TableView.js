import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getCountries } from '../actions/countryActions';
import PropTypes from 'prop-types';

class TableView extends Component {

    componentDidMount() {
        this.props.getCountries();
    }

    render() {
        const { countries } = this.props.country; 

        return(
            <div>
                <Container>
                    <h1>Totals By Country</h1>
                    <div className="table-responsive">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Total Cases</th>
                                    <th>Total Deaths</th>
                                    <th>Total Recovered</th>
                                    <th>Today's Cases</th>
                                    <th>Today's Deaths</th>
                                    <th>Today's Recoveries</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            countries.map(({ Country, Slug, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered }) => (
                                    <tr key={Slug}>
                                        <td className="font-weight-bold">{Country}</td>
                                        <td className="font-weight-bold">{TotalConfirmed}</td>
                                        <td className="font-weight-bold text-danger">{TotalDeaths}</td>
                                        <td className="font-weight-bold text-success">{TotalRecovered}</td>
                                        <td className="font-weight-bold">{NewConfirmed}</td>
                                        <td className="font-weight-bold text-danger">{NewDeaths}</td>
                                        <td className="font-weight-bold text-success">{NewRecovered}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        );
    }
}

TableView.propTypes = {
    getCountries: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    country: state.country
});

export default connect(
    mapStateToProps,
    { getCountries }
)(TableView);