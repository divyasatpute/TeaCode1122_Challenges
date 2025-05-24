#!/bin/bash
echo "Current Time: $(date) System Uptime: $(uptime -p | awk '
{
    h = 0; m = 0;
    for (i = 1; i <= NF; i++) {
        if ($i ~ /hour/) h = $(i - 1);
        if ($i ~ /minute/) m = $(i - 1);
    }
    printf("%d:%02d", h, m);
}')"
