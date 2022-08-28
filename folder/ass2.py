import cv2
from numpy import mat

# read image file name image.jpg
img = cv2.imread('folder\download.jpg')

# show image

# convert image to RGB
RGBimg = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
# convert image to grayscale
GrayScaleimg = cv2.cvtColor(RGBimg, cv2.COLOR_RGB2GRAY)
# show RGB image and grayscale image
cv2.imshow('RGB image', RGBimg)

cv2.imshow('GrayScale image', GrayScaleimg)

# resize iamge to 256x256
resizedimg = cv2.resize(RGBimg, (256, 256))

# show resized image
cv2.imshow('resized image', resizedimg)
# convert image to matrix
matrix = cv2.cvtColor(resizedimg, cv2.COLOR_RGB2GRAY)
print(matrix)


# blur RGB image
blurimg = cv2.blur(RGBimg, (5, 6))
# show blurred image
cv2.imshow('blurred image', blurimg)


# remove background of RGB image
removebg = cv2.subtract(RGBimg, blurimg)
# show removed background image
cv2.imshow('removed background', removebg)

# 
# wait for a key to be pressed
cv2.waitKey(0)
