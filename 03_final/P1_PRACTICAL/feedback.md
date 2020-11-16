1. you seem to be using the same view index.ejs for both '/' and '/getbeer'.
2. when you search for a beer, you are not grabbing the search term from the route, i.e. where is your `req.query.beer_name` ?

There are a few other issues, but these must be addressed to get this working.

Score so far: 