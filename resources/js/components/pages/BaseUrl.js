import React, {Component} from 'react';

export default function() {
    if (typeof window !== 'undefined') {
        return location.protocol + '//' + location.host; // (or whatever)
    } else {
        throw new Error("Missing props from React router.")
    }
}
