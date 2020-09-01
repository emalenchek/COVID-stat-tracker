import React, { Component } from 'react';
import { Container, Table, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getCountries } from '../actions/countryActions';
import PropTypes from 'prop-types';

class TableView extends Component {

    state = {
        searchTerm: ''
    }

    componentDidMount() {
        this.props.getCountries();
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        const { countries } = this.props.country;
        const filtered = countries.filter((data) => {
            if(this.state.searchTerm === '') {
                return data;
            } else if(data.Country.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                return data;
            }
        }); 

        return(
            <div>
                <Container>
                    <InputGroup className="mb-5">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search</InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.editSearchTerm} />
                    </InputGroup>
                </Container>
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
                            filtered.map(({ Country, Slug, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered }) => (
                                    <tr key={Slug} id={Slug}>
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