import React, { useState } from "react";
import "./styles.css";
import PlacesAutocomplete from "mb-places";

export default function App() {
  const [address, setAddress] = useState();
  const handleAddress = (newAddress) => {
    setAddress(newAddress);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PlacesAutocomplete
        value={address}
        onSelect={handleAddress}
        onChange={handleAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div className="search" style={{ position: "relative" }}>
              <div style={{ display: "flex" }}>
                <input
                  id="search-location"
                  aria-label="search location"
                  autoComplete="off"
                  {...getInputProps({
                    className: "location-search-input"
                  })}
                />
              </div>
              <div className="autocomplete-dropdown-container">
                {loading && (
                  <div
                    className="suggestion-item"
                    style={{ backgroundColor: "#ffffff" }}
                    key="loading"
                  >
                    "Loading"
                  </div>
                )}

                {suggestions.map((suggestion, idx) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };

                  if (idx !== suggestions.length - 1) {
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className: `${
                            suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item"
                          }`,
                          style
                        })}
                        key={suggestion.id}
                      >
                        <strong>{suggestion.main}</strong>{" "}
                        <span>{suggestion.rest}</span>
                      </div>
                    );
                  } else {
                    return (
                      <>
                        <div
                          key={suggestion.id}
                          {...getSuggestionItemProps(suggestion, {
                            className: `${
                              suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item"
                            }`,
                            style
                          })}
                        >
                          <strong>{suggestion.main}</strong>{" "}
                          <span>{suggestion.rest}</span>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
    </div>
  );
}
