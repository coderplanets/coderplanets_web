#!/bin/bash

ENV="dev"

ARCHIVE_NAME="./deploy/${ENV}/web.tar.gz"
PACKER_TMP_DIR="./packer_tmp"
TOTAL_STEPS=4

echo "[Step 1/${TOTAL_STEPS}] creating ${PACKER_TMP_DIR} ..."
if [ -d "${PACKER_TMP_DIR}" ]; then
  echo "remove ${PACKER_TMP_DIR}"
  rm -rf "${PACKER_TMP_DIR}"
fi
mkdir "${PACKER_TMP_DIR}"

echo "[Step 2/${TOTAL_STEPS}] cp files to ${PACKER_TMP_DIR} ..."
# cp -rf pages lang containers components stores config static utils next.config.js .babelrc "${PACKER_TMP_DIR}"
cp -rf pages lang containers components services stores config static utils .babelrc next.config.js next-seo.config.js server.js "${PACKER_TMP_DIR}"
cp Makefile Makefile.include.mk "${PACKER_TMP_DIR}"
cp package-docker.json "${PACKER_TMP_DIR}/package.json"
# cp package.json "${PACKER_TMP_DIR}/package.json"

echo "[Step 3/${TOTAL_STEPS}] creating ${ARCHIVE_NAME} ..."
cd "${PACKER_TMP_DIR}"
tar czvf "../${ARCHIVE_NAME}" * .babelrc
cd ../

echo "[Step 4/${TOTAL_STEPS}] cleanup ..."
rm -rf "${PACKER_TMP_DIR}"
echo "--------------------------"
echo "done !"
