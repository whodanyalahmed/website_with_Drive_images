import cv2

import numpy as np

# read image file name image.jpg
img = cv2.imread('folder/download.jpg')


# show image
cv2.imshow("Image", img)

# blur image
blurimg = cv2.blur(img, (5, 6))
# show blurred image
cv2.imshow('blurred image', blurimg)


# remove background of RGB image
removebg = cv2.subtract(img, blurimg)

# show removed background image
cv2.imshow('removed background', removebg)
# wait for key
cv2.waitKey(0)
