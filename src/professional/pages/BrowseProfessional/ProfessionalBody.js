
import SearchBar from '../../components/searchbar/Searchbar';
import { Rating, FormControl, Select, MenuItem, Button, Slider } from '@mui/material';


function ProfessionalBody ({ proflist }) {
    let sortOpt;
    return (
        <div className='main-container'>
                    <div className='filter-options'>
                        <div className='slider-container'>
                            <p>Range</p>
                            <div className='slider'>
                                <Slider defaultValue={50} aria-label='default' />
                            </div>
                        </div>
                        <div className='radio-container'>
                            <input type='radio' id='plumber' name='job-type' value='plumber' />
                            <label id='plumber' className='radiolable'>Plumbers Only</label><br />
                            <input type='radio' id='elecrician' name='job-type' value='electrician' />
                            <label id='electrician' className='radiolable'>Electrician Only</label><br />
                        </div>
                        <div className='reviews-container'>
                            <p style={{ fontSize: "28px", margin: "5px" }}>Minimum Review</p>
                            <div className='review-list'>
                                <div>
                                    <Rating readOnly size='large' style={{ margin: '5px', }} value={1} />
                                </div>
                                <div>
                                    <Rating readOnly size='large' style={{ margin: '5px', }} value={2} />
                                </div>
                                <div>
                                    <Rating readOnly size='large' style={{ margin: '5px', }} value={3} />
                                </div>
                                <div>
                                    <Rating readOnly size='large' style={{ margin: '5px', }} value={4} />
                                </div>
                                <div>
                                    <Rating readOnly size='large' style={{ margin: '5px', }} value={5} />
                                </div>
                            </div>
                        </div>
                        <div className='sort-container'>
                            <p>Sort By</p>
                            <div className='sort-dropdown'>
                                <FormControl fullWidth>
                                    <Select id='sort' value={sortOpt}>
                                        <MenuItem value="a to z">a to z</MenuItem>
                                        <MenuItem value="z to a">z to a</MenuItem>
                                        <MenuItem value="Price high to low">Price high to low</MenuItem>
                                        <MenuItem value="Price low to high">Price low to high</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='services'>
                            <Button variant='contained' color='success' style={{borderRadius: "20px", marginRight: "5px", marginTop: "10px", fontSize: "12px" }}>
                                Installation
                            </Button>
                            <Button variant='contained' color='success'  style={{borderRadius: "20px", marginRight: "5px", marginTop: "10px", fontSize: "12px" }}>
                                Clogging Issues
                            </Button>
                            <Button variant='contained' color='success'  style={{borderRadius: "20px", marginRight: "5px", marginTop: "10px", fontSize: "12px" }}>
                                Short Circuit
                            </Button>
                            <Button variant='contained' color='success'  style={{borderRadius: "20px", marginRight: "5px", marginTop: "10px", fontSize: "12px" }}>
                                Utility Repairs
                            </Button>
                            <Button variant='contained' color='success'  style={{borderRadius: "20px", marginRight: "5px", marginTop: "10px", fontSize: "12px" }}>
                                Replacement
                            </Button>
                        </div>
                    </div>
                    <div className='professional-list-container'>
                        <div className='search-browse-professional'>
                            <SearchBar />
                        </div>
                        {proflist}
                    </div>
                </div>
    )
}

export default ProfessionalBody;