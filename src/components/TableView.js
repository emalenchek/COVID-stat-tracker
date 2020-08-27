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
                    <Table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Total Cases</th>
                                <th>Total Deaths</th>
                                <th>Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        countries.map(({ Country, Slug, TotalConfirmed, TotalDeaths, TotalRecovered }) => (
                                <tr key={Slug}>
                                    <td>{Country}</td>
                                    <td>{TotalConfirmed}</td>
                                    <td className="text-danger">{TotalDeaths}</td>
                                    <td className="text-success">{TotalRecovered}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
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