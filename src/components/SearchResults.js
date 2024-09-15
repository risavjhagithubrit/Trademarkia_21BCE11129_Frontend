// components/SearchResults.js
import React from 'react';
import { Grid, Typography, Card, CardContent, Pagination } from '@mui/material';

const SearchResults = ({ results, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="results">
      <Grid container spacing={3}>
        {results.length > 0 ? (
          results.map((result) => (
            <Grid item xs={12} sm={6} key={result.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{result.trademarkName}</Typography>
                  <Typography>
                    <strong>Owner:</strong> {result.owner}
                  </Typography>
                  <Typography>
                    <strong>Attorney:</strong> {result.attorney}
                  </Typography>
                  <Typography>
                    <strong>Status:</strong> {result.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            No results found.
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, page) => onPageChange(page)}
          color="primary"
          style={{ marginTop: '20px' }}
        />
      )}
    </div>
  );
};

export default SearchResults;
