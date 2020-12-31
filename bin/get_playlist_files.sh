#!/usr/bin/bash

youtube-dl --flat-playlist -e --print-json "$1"
