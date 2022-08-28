import cv2
import numpy as np

# read image file name image.jpg
img = cv2.imread('folder/jung.jpg')

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
img_gaussian = cv2.GaussianBlur(gray, (3, 3), 0)
# apply canny edge detection
canny = cv2.Canny(img, 100, 200)
# show image
cv2.imshow("Canny Filter", canny)

# apply sobel edge detection
sobel = cv2.Sobel(img, cv2.CV_64F, 1, 0, ksize=5)
# show image
cv2.imshow("Sobei Filter", sobel)

# apply laplacian edge detection
laplacian = cv2.Laplacian(img, cv2.CV_64F)

# show image
cv2.imshow("Laplacian Filter", laplacian)
# apply prewitt edge detection of x as 1 and y as 0


# prewitt
kernelx = np.array([[1, 1, 1], [0, 0, 0], [-1, -1, -1]])
kernely = np.array([[-1, 0, 1], [-1, 0, 1], [-1, 0, 1]])
img_prewittx = cv2.filter2D(img_gaussian, -1, kernelx)
img_prewitty = cv2.filter2D(img_gaussian, -1, kernely)

cv2.imshow("Prewitt", img_prewittx + img_prewitty)
# wait for key
cv2.waitKey(0)
