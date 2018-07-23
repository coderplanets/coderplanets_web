#!/bin/bash

ENV="dev"

ARCHIVE_NAME="./docker/${ENV}/web.tar.gz"
PACKER_TMP_DIR="./packer_tmp"
TOTAL_STEPS=4

echo "[Step 1/${TOTAL_STEPS}] creating ${PACKER_TMP_DIR} ..."
if [ -d "${PACKER_TMP_DIR}" ]; then
  echo "remove ${PACKER_TMP_DIR}"
  rm -rf "${PACKER_TMP_DIR}"
fi
mkdir "${PACKER_TMP_DIR}"

echo "[Step 2/${TOTAL_STEPS}] cp files to ${PACKER_TMP_DIR} ..."
# cp -rf pages lang containers components stores config static utils next.config.js .env .babelrc "${PACKER_TMP_DIR}"
npm run build
# mv package.json.tmp package.json

cp -rf .next "${PACKER_TMP_DIR}"
cp package-docker.json "${PACKER_TMP_DIR}/package.json"

cd "${PACKER_TMP_DIR}/.next"
find . -name "*.js.map" -type f | xargs rm -f
find . -name "*.hot-update.js" -type f | xargs rm -f
find . -name "*.hot-update.json" -type f | xargs rm -f

echo "[Step 3/${TOTAL_STEPS}] creating ${ARCHIVE_NAME} ..."
cd ../..
tar czvf "${ARCHIVE_NAME}" "${PACKER_TMP_DIR}/.next" "${PACKER_TMP_DIR}/package.json"

echo "[Step 4/${TOTAL_STEPS}] cleanup ..."
rm -rf "${PACKER_TMP_DIR}"
echo "--------------------------"
echo "done !"
