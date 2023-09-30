import React from 'react';

export function DisplayBox({ itinerary }: { itinerary: string }) {
  // Check if the itinerary is not an empty string
  if (itinerary !== '') {
    const formattedItinerary = itinerary.split('\n').join('<br />');

    return (
      <div
        style={{
          border: '2px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          width: '600px',
          backgroundColor: '#f2f2f2',
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: formattedItinerary }}
        ></div>
      </div>
    );
  } else {
    // Return null if the itinerary is an empty string to render nothing
    return null;
  }
}
