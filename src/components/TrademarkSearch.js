// components/TrademarkSearch.js
import React, { useState } from 'react';
import { Grid, TextField, Button, CircularProgress } from '@mui/material';
import Select from 'react-select';
import axios from 'axios';
import SearchResults from './SearchResults';

const TrademarkSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [owner, setOwner] = useState('');
  const [lawFirm, setLawFirm] = useState('');
  const [attorney, setAttorney] = useState('');
  const [status, setStatus] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
  ];

  const handleSearch = async (page = 1) => {
    const filters = { searchQuery, owner, lawFirm, attorney, status, page };

    setLoading(true);
    try {
      const response = await axios.get('', { params: filters });
      setResults(response.data.results);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching trademarks:', error);
    }
    setLoading(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleSearch(newPage);
  };

  return (
    <div className="search-container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search for Trademarks"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Law Firm"
            value={lawFirm}
            onChange={(e) => setLawFirm(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Attorney"
            value={attorney}
            onChange={(e) => setAttorney(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Select
            options={statusOptions}
            placeholder="Status"
            onChange={(selectedOption) => setStatus(selectedOption.value)}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleSearch(1)}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <CircularProgress style={{ marginTop: '20px' }} />
      ) : (
        <SearchResults
          results={results}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default TrademarkSearch;
