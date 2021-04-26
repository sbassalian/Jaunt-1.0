export const fetchListings = data => {

    return($.ajax({
        method: 'GET',
        url: 'api/listings',
        data
    }))
};

export const fetchListing = id => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${id}`
    })
);

export const createListing = listing => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data: { listing }
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);
