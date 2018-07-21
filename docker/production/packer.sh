#!/bin/bash

ENV="dev"

ARCHIVE_NAME="./docker/${ENV}/web.tar.gz"
TOTAL_STEPS=1

echo "[Step 1/${TOTAL_STEPS}] creating ${ARCHIVE_NAME} ..."
tar czf "${ARCHIVE_NAME}" pages lang containers components stores config static utils package.json package-lock.json next.config.js
