#!/usr/bin/env bash
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);
echo $EXISTING_VARS
echo $JSFOLDER
for file in $JSFOLDER;
do
  cat $file | envsubst $EXISTING_VARS | tee $file
done
nginx -g 'daemon off;'