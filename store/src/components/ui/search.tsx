"use client";

import { Suspense, useState, useDeferredValue } from "react";
import React from "react";
import { Input } from "./input";

interface IAlbum {
  id: number;
  title: string;
  year: number;
}

let cache = new Map();

function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url: string) {
  if (url.startsWith("/search?q=")) {
    return await getSearchResults(url.slice("/search?q=".length));
  } else {
    throw Error("Not implemented");
  }
}

async function getSearchResults(query: string) {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  const allAlbums = [
    {
      id: 13,
      title: "Let It Be",
      year: 1970,
    },
    {
      id: 12,
      title: "Abbey Road",
      year: 1969,
    },
    {
      id: 11,
      title: "Yellow Submarine",
      year: 1969,
    },
    {
      id: 10,
      title: "The Beatles",
      year: 1968,
    },
    {
      id: 9,
      title: "Magical Mystery Tour",
      year: 1967,
    },
    {
      id: 8,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      year: 1967,
    },
    {
      id: 7,
      title: "Revolver",
      year: 1966,
    },
    {
      id: 6,
      title: "Rubber Soul",
      year: 1965,
    },
    {
      id: 5,
      title: "Help!",
      year: 1965,
    },
    {
      id: 4,
      title: "Beatles For Sale",
      year: 1964,
    },
    {
      id: 3,
      title: "A Hard Day's Night",
      year: 1964,
    },
    {
      id: 2,
      title: "With The Beatles",
      year: 1963,
    },
    {
      id: 1,
      title: "Please Please Me",
      year: 1963,
    },
  ];

  const lowerQuery = query.trim().toLowerCase();
  return allAlbums.filter((album) => {
    const lowerTitle = album.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(" " + lowerQuery) !== -1
    );
  });
}

function SearchResults({ query }: { query: string }) {
  if (query === "") {
    return null;
  }
  const albums: Array<IAlbum> = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return (
      <p>
        No matches found for {`"${query}"`}
      </p>
    );
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise: any) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: any) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: any) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

interface IProps {
  placeholder: string;
  className: string;
}

const Search = ({ placeholder, className }: IProps) => {
  const [query, setQuery] = useState<string>("");
  const deferredQuery = useDeferredValue<string>(query);
  const isStale = query !== deferredQuery;
  return (
    <>
      <div className="relative h-10">
        <label>
          <Input
            className={`min-w-[250px] w-[250px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent ${className}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
          />
        </label>

        {query !== "".trim() && (
          <div className="p-2 min-w-[250px] w-[250px] absolute top-11 left-0 h-[250px] overflow-auto bg-white shadow-lg rounded">
            <Suspense fallback={<h2>Loading...</h2>}>
              <div
                style={{
                  opacity: isStale ? 0.5 : 1,
                  transition: isStale
                    ? "opacity 0.2s 0.2s linear"
                    : "opacity 0s 0s linear",
                }}
              ></div>
              <SearchResults query={deferredQuery} />
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
