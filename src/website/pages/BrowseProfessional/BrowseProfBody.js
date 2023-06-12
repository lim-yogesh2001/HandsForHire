
import SearchBar from '../../components/searchbar/Searchbar';
import { Rating, Button, Slider } from '@mui/material';
import DropDown from '../../components/dropdown/DropDown';


function BrowseProfBody({ proflist }) {
    const dropdownValues = [
        "a to z",
        "z to a",
        "Price High to Low",
        "Price Low to High",
    ]

    const ratings = [
        1, 2, 3, 4, 5
    ]

    const renderedRatings = ratings.map((x) => {
        return (
            <div key={x}>
                <Rating readOnly size='large' style={{ margin: '5px', }} value={x} />
            </div>
        )
    });

    const buttons = [
        'Installation', "Clogging Issues", "Short Circuit", "Utility Repairs", "Replacement"
    ];

    const renderedButtons = buttons.map((x) => {
        return (
            <Button key={x} variant='contained' color='success' style={{ borderRadius: "20px", marginRight: "5px", marginTop: "10px", fontSize: "12px" }}>
                {x}
            </Button>
        )
    })

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
                        {renderedRatings}
                    </div>
                </div>
                <div className='sort-container'>
                    <p>Sort By</p>
                    <DropDown dropdownValues={dropdownValues} />
                </div>
                <div className='services'>
                    {renderedButtons}
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

export default BrowseProfBody;