export const fetchListings = () => {

    return($.ajax({
        method: 'GET',
        url: 'api/listings',
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
