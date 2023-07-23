---
title: "rSVDdpd Homepage"
subtitle: "Robust Singular Value Decomposition using Density Power Divergence"
description: "This is a supporting webpage for the paper [A New Robust Scalable Singular Value Decomposition Algorithm for Video Surveillance Background Modelling](https://arxiv.org/abs/2109.10680)"
---

# Extended Abstract

A basic algorithmic task in automated video surveillance is to separate background and foreground objects. Camera
tampering, noisy videos, low frame rate, etc., pose difficulties in solving the problem. A general approach that classifies the tampered
frames, and performs subsequent analysis on the remaining frames after discarding the tampered ones, results in loss of information. If the ultimate goal is to perform background modelling, foreground object detection or motion detection etc., then it would be useful to have an algorithm that robustly performs background foreground separation from video surveillance data. Thus, considerable effort has been expended to solve this problem. 

1. There is a class of statistical background modelling that assumes that the intensity of the pixel values corresponding to the background content is distributed according to a known probability distribution (Gaussian or Mixture of Gaussian). These algorithms are fast, but their performances are not so great.

2. Background modelling based on deep neural network has also been performed. Usually a convolutional neural network with hundreds, thousands or millions of parameters with several layers of connection is built. These are fast for the inference, their performances are great, but they require an enormous amount of data and time for training.

3. Recent approaches towards background modelling assumes a decomposition of the video data into a low rank matrix (corresponding to the background content) and a sparse or noisy matrix (corresponding to the foreground content). Matrix decomposition algorithms like robust PCA have been found to be useful here. However, these algorithms have high computational complexity, and performs a convex optimization problem which do not scale well for large scale real life video surveillance data. Also, an integral component of these foreground detection algorithms is singular value decomposition which is nonrobust. 

In this paper, we aim to introduce a scalable, fast, efficient and robust singular value decomposition technique based on the popular minimum density power divergence estimator which naturally extends to a background modelling algorithm. We call this algorithm `rSVDdpd`. We also demonstrate the superiority of our proposed algorithm on a benchmark dataset (Background Models Challenge or BMC Dataset) and a new real-life video surveillance dataset (University of Houston Camera Tampering or UHCT Dataset) in presence of camera tampering.

# Codes
 
* The proposed **rSVDdpd** algorithm is made available in an `R` package [`rsvddpd`](https://cran.r-project.org/web/packages/rsvddpd/index.html). 
* A simple introductory tutorial for the package is also available in form of a vignette [Introduction to rSVDdpd](https://cran.r-project.org/web/packages/rsvddpd/vignettes/rSVDdpd-intro.html).

* Some of the sample codes are available [here](./rsvddpd-scripts.tar.gz).

# Supplementary Materials

* The enlarged version of the figures presented in the paper [A New Robust Scalable Singular Value Decomposition Algorithm for Video Surveillance Background Modelling](https://arxiv.org/abs/2109.10680) are available [here](./paper-figures.tar.gz).

## BMC Dataset

The Background Modelling Challenger (BMC) Dataset is taken from http://backgroundmodelschallenge.eu/ containing some simulated video surveillance data with proper ground truth of foreground and background content. Here we demonstrate the original video, the ground truth mask along with the estimated foregrounds from different algorithms as follows.

- **SVD:** Singular Value Decomposition of the Video Data Matrix.
- **rSVDdpd:** The proposed Robust SVD using Density Power Divergence Algorithm. Reference https://arxiv.org/abs/2109.10680.
- **Robust PCA:** Robust Principal Component Analysis. Reference https://arxiv.org/abs/0912.3599.
- **Inexact ALM:** Inexact Augmented Lagrangian Method for Robust PCA. Reference https://doi.org/10.1080/10556788.2012.700713.
- **SRPCP:** Sparse Regularized Principal Component Pursuit. Reference http://code.ucsd.edu/~pcosman/Liu_2017-151.pdf.
- **VB:** Variational Bayesian Method for Robust PCA. Reference https://doi.org/10.1109/TSP.2012.2197748.
- **OP:** Outlier Pursuit Algorithm. Reference https://doi.org/10.1109/TIT.2011.2173156.
- **GoDec:** Go Decomposition Algorithm. Reference https://dl.acm.org/doi/10.5555/3104482.3104487.

Following are the descriptions of the videos present in the dataset along with the experimental results.

| Video | Video Background | Noise | Link |
| ------| ----------- | ------ | ----- |
| Video 112 | A street with moving cars | Noiseless | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/112.tar.gz) |
| Video 122 | A rotary with moving cars | Noiseless | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/122.tar.gz) |
| Video 212 | A street with moving cars | Slight imperceptible noise in pixel values | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/212.tar.gz) |
| Video 222 | A rotary with moving cars | Slight imperceptible noise in pixel values | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/222.tar.gz) |
| Video 312 | A street with moving cars | Varying illumination due to the movement of the sun | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/312.tar.gz) |
| Video 322 | A rotary with moving cars | Varying illumination due to the movement of the sun | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/322.tar.gz) |
| Video 412 | A street with moving cars | Cloud and fog for a brief period | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/412.tar.gz) |
| Video 422 | A rotary with moving cars | Cloud and fog for a brief period | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/422.tar.gz) |
| Video 512 | A street with moving cars | Windy movement of the trees | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/512.tar.gz) |
| Video 522 | A rotary with moving cars | Windy movement of the trees | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/bmc/522.tar.gz) |



## UHCT Dataset

University of Houston Camera Tampering is a dataset collected from University of Houston's surveillance video footage data for two consecutive days across two cameras in the UH campus. Some frames of the videos have been synthentically tampered with noisy artifacts to emulate camera tampering. The dataset is taken from [UHCTD: A Comprehensive Dataset for Camera Tampering Detection](http://qil.uh.edu/main/datasets/).

| Video | Description | Original Video Link | Results Link |
| ----- | ----------- | ---- | ---- |
| Stream 1 | A small part of the video surveillance footage in Day 2 from Camera B in the UHCT Dataset. Some of the frames have been tampered with random image partially. | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/Stream1.mp4) | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/stream1.tar.gz) |
| Stream 2 | A small part of the nighttime video surveillance footage in Day 1 from Camera A in the UHCT Dataset. Some of the frames have been tampered with random image partially. | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/Stream2.mp4) | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/stream2.tar.gz) | 
| Stream 3 | A small part of a daytime video surveillance footage in Day 1 from Camera A in the UHCT Dataset. Some of the frames have been tampered with random image partially. There is also presence of change in intensity and illumination due to the position of the sun. | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/Stream3.mp4) | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/stream3.tar.gz) | 
| Stream 4 | A small part of a daytime video surveillance footage in Day 2 from Camera A in the UHCT Dataset. After some time, the camera has been tampered by moving it to point in a different direction. A reliable foreground extraction and background modelling algorithm should be sensitive to this rapid change in background and should indicate the presence of camera tampering. | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/Stream4.mp4) | [link](https://curated-webrepo.s3.ap-south-1.amazonaws.com/rsvddpd-home/uhctd/stream4.tar.gz) |


**Note:** The videos and the GIF have been compressed at an increased frame per second to save storage. Please convert it to a reduced frame per second video clip for better inspection.


# References

Following are some useful references on various algorithms for background modelling.

1. [Background Subtraction Website](https://sites.google.com/site/backgroundsubtraction)
2. [Low-Rank and Sparse Tools for Background Modeling and Subtraction in Videos](https://github.com/andrewssobral/lrslibrary)
3. [Background Models Challenge Dataset](http://backgroundmodelschallenge.eu/)
4. [UHCTD: A Comprehensive Dataset for Camera Tampering Detection](http://qil.uh.edu/main/datasets/)
