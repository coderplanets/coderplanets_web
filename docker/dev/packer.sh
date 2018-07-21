#!/bin/bash

ENV="dev"

ARCHIVE_NAME="../docker/${ENV}/web.tar.gz"
PACKER_TMP_DIR="./packer_tmp"
TOTAL_STEPS=1

echo "[Step 1/${TOTAL_STEPS}] creating ${PACKER_TMP_DIR} ..."
if [ -d "${PACKER_TMP_DIR}" ]; then
  rm -rf "${PACKER_TMP_DIR}"
fi
mkdir "${PACKER_TMP_DIR}"

echo "[Step 2/${TOTAL_STEPS}] cp files to ${PACKER_TMP_DIR} ..."
cp -rf pages lang containers components stores config static utils next.config.js "${PACKER_TMP_DIR}"
cp package-docker.json "${PACKER_TMP_DIR}/package.json"

echo "[Step 3/${TOTAL_STEPS}] creating ${ARCHIVE_NAME} ..."
cd "${PACKER_TMP_DIR}"
tar czf "${ARCHIVE_NAME}" pages lang containers components stores config static utils package.json next.config.js

echo "[Step 4/${TOTAL_STEPS}] cleanup ..."
cd ../
rm -rf "${PACKER_TMP_DIR}"
echo "--------------------------"
echo "done !"
