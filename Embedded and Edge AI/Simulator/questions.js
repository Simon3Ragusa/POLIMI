const closedPool = [
    {
        "q": "What defines the 'Application Error Rate' (AER) in an Edge AI system?",
        "o": [
            "The loss function during training.",
            "The combined error probability of the entire pipeline (sensor, ADC, DSP, ML).",
            "The hardware failure rate of the MCU.",
            "The quantization error introduced by INT8."
        ],
        "a": 1,
        "e": "AER encompasses the entire sensing and processing pipeline, not just the ML model's accuracy.",
        "src": "01 - Intro to the course"
    },
    {
        "q": "Which constraint is typically the strictest for an always-on edge device?",
        "o": [
            "Maximum clock frequency.",
            "Energy/Power budget.",
            "Cloud bandwidth.",
            "DRAM latency."
        ],
        "a": 1,
        "e": "Battery-powered always-on devices are primarily constrained by their strict power budget.",
        "src": "01 - Intro to the course"
    },
    {
        "q": "In the edge computing paradigm, what is a primary benefit of processing data locally rather than in the cloud?",
        "o": [
            "Infinite storage capacity.",
            "Lower deterministic latency and preserved data privacy.",
            "Access to 64-bit floating point GPUs.",
            "Ability to continuously run backpropagation."
        ],
        "a": 1,
        "e": "Local processing avoids network round-trips (saving latency) and keeps sensitive raw data on-device (privacy).",
        "src": "01 - Intro to the course"
    },
    {
        "q": "What is the typical hierarchy of the Edge AI data pipeline?",
        "o": [
            "Sensor -> ML -> ADC -> Actuator",
            "Sensor -> ADC -> DSP -> ML -> Actuator",
            "ML -> DSP -> ADC -> Sensor",
            "ADC -> Sensor -> ML -> DSP"
        ],
        "a": 1,
        "e": "Physical signals hit the Sensor, are digitized by the ADC, cleaned by DSP, inferred by ML, and trigger an Actuator.",
        "src": "01 - Intro to the course"
    },
    {
        "q": "Why is 'TinyML' specifically distinct from general Edge AI?",
        "o": [
            "It only uses 1-bit quantization.",
            "It targets microcontrollers (MCUs) with mW or µW power budgets and KB-level memory.",
            "It refers to models with less than 10 layers.",
            "It only processes 1D time-series data."
        ],
        "a": 1,
        "e": "TinyML specifically targets severely resource-constrained MCUs, unlike Edge AI which can include powerful gateways like Jetson Nanos.",
        "src": "01 - Intro to the course"
    },
    {
        "q": "What distinguishes a Microcontroller (MCU) from a Microprocessor (MPU)?",
        "o": [
            "MCUs require an external OS like Linux.",
            "MCUs integrate CPU, memory (SRAM/Flash), and peripherals on a single chip.",
            "MPUs operate at micro-watt power levels.",
            "MCUs have built-in GPUs."
        ],
        "a": 1,
        "e": "MCUs are self-contained systems-on-a-chip designed for deeply embedded control.",
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "Which memory component on an MCU is typically non-volatile and used to store model weights?",
        "o": [
            "SRAM",
            "Flash",
            "L1 Cache",
            "Registers"
        ],
        "a": 1,
        "e": "Flash memory retains data without power and is used for firmware and fixed weights.",
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "What is the primary purpose of 'Deep Sleep' modes in Microcontrollers?",
        "o": [
            "To pause the ML model during inference.",
            "To shut down major power domains (CPU, main memory) while keeping a low-power timer/RTC active to save energy.",
            "To offload processing to the cloud.",
            "To increase the clock frequency temporarily."
        ],
        "a": 1,
        "e": "Deep sleep drastically reduces power consumption during idle periods, waking up only on interrupts.",
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "What role does a Floating-Point Unit (FPU) play in embedded hardware?",
        "o": [
            "It acts as a Flash Processing Unit for faster storage access.",
            "It provides hardware acceleration for floating-point arithmetic, avoiding slow software emulation.",
            "It serves as a Frequency Prediction Unit for clock scaling.",
            "It operates as a Feature Pooling Unit for Convolutional Neural Networks."
        ],
        "a": 1,
        "e": "An FPU allows the MCU to execute floating-point operations natively without slow software emulation.",
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "How do SIMD instructions (such as Xtensa PIE) accelerate execution in embedded processors?",
        "o": [
            "By executing one operation simultaneously on multiple data points.",
            "By sequentially inputting memory blocks.",
            "By operating exclusively in a secure micro-device domain.",
            "By executing multiple different instructions on a single data point."
        ],
        "a": 0,
        "e": "SIMD accelerates vector math (like MACs in NNs) by processing multiple array elements per clock cycle.",
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "Why is a 'Windowing Function' (e.g., Hamming, Hanning) applied before performing an FFT on a time-series signal?",
        "o": [
            "To increase the overall signal amplitude.",
            "To mitigate spectral leakage caused by non-periodic discontinuities at the edges of the sample frame.",
            "To convert the signal back into the time domain.",
            "To structurally compress the data size before processing."
        ],
        "a": 1,
        "e": "Windowing tapers the ends of the signal to zero, making it smoothly periodic and reducing artificial high-frequency noise in the FFT.",
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "Which Digital Signal Processing (DSP) technique is utilized to analyze how the frequency content of a signal changes over time?",
        "o": [
            "Standard Fast Fourier Transform (FFT).",
            "Short-Time Fourier Transform (STFT).",
            "Infinite Impulse Response (IIR) filtering.",
            "Simple Moving Average calculation."
        ],
        "a": 1,
        "e": "STFT computes FFTs on sliding overlapping windows, creating a spectrogram of time vs. frequency.",
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "In the context of digital signal preprocessing, what is the primary purpose of a 'Low pass filter'?",
        "o": [
            "To keep only the high frequencies and discard the rest.",
            "To keep low frequencies and discard high frequencies, mitigating high-frequency noise.",
            "To completely reconstruct missing data points.",
            "To shift the phase of the signal."
        ],
        "a": 1,
        "e": "A low pass filter allows signals with a frequency lower than a selected cutoff frequency to pass through and attenuates frequencies higher than the cutoff.",
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "In the context of sensor data processing, what is the primary objective of 'Downsampling'?",
        "o": [
            "To arbitrarily increase the ADC bit-depth for higher precision.",
            "To reduce the sampling rate, thereby lessening the computational load and memory requirements for subsequent stages.",
            "To artificially amplify high-frequency noise for anomaly detection.",
            "To transpose spatial data into temporal data arrays."
        ],
        "a": 1,
        "e": "Downsampling discards samples to lower the rate, assuming the Nyquist criterion for the frequencies of interest is still met.",
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "Which of the following features is specifically extracted from the frequency domain when analyzing audio or vibration signals?",
        "o": [
            "The Zero-crossing rate of the waveform.",
            "The Root Mean Square (RMS) of the amplitude.",
            "The Spectral Entropy or Dominant Frequency.",
            "The Peak-to-peak amplitude measurement."
        ],
        "a": 2,
        "e": "Spectral features analyze the distribution of frequencies, unlike time-domain features like RMS or Zero-crossing.",
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "When evaluating a binary classification model on a highly imbalanced dataset, which metric provides the most reliable assessment?",
        "o": [
            "Standard Accuracy.",
            "The F1-Score.",
            "Mean Squared Error (MSE).",
            "True Negative Rate evaluated in isolation."
        ],
        "a": 1,
        "e": "F1-Score is the harmonic mean of Precision and Recall, making it robust against class imbalance where Accuracy would be misleading.",
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "How is 'Data Leakage' defined in the context of Machine Learning model evaluation?",
        "o": [
            "The physical loss of sensor data due to power failure.",
            "A scenario where information from outside the training dataset (e.g., test set data) inadvertently influences model training, artificially inflating evaluation metrics.",
            "The miscalibration of an input sensor.",
            "The overflow of weights beyond 8-bit precision limits."
        ],
        "a": 1,
        "e": "Leakage creates overly optimistic models that fail to generalize in production.",
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "Why is the 'Leave-One-Subject-Out' (LOSO) cross-validation technique considered crucial for evaluating wearable ML models?",
        "o": [
            "It significantly accelerates the training process compared to standard K-fold validation.",
            "It ensures that samples from a single person are not split across training and testing sets, providing proof that the model can generalize to entirely unseen users.",
            "It deliberately excludes the most difficult classification class to simplify training.",
            "It automatically reduces the final memory footprint of the model."
        ],
        "a": 1,
        "e": "Biometric/wearable data is highly correlated per user. LOSO tests true generalization.",
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "Which traditional Machine Learning algorithm utilizes an ensemble of decision trees to improve overall generalization?",
        "o": [
            "Support Vector Machine (SVM).",
            "Random Forest.",
            "K-Nearest Neighbors (KNN).",
            "Logistic Regression."
        ],
        "a": 1,
        "e": "Random Forests aggregate the predictions of multiple uncorrelated decision trees to reduce overfitting.",
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "What specific role does a 'Validation Set' serve within the standard Machine Learning workflow?",
        "o": [
            "It is used to compute and update the final weights of the model during backpropagation.",
            "It provides an unbiased evaluation metric used exclusively to tune hyperparameters and make architectural decisions without compromising the final Test Set.",
            "It is utilized to normalize the raw input signals from the sensors.",
            "It acts as a substitute training set when data volume is exceedingly small."
        ],
        "a": 1,
        "e": "The validation set provides unbiased evaluation during training for hyperparameter tuning.",
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "How is the 'Receptive Field' of a neuron defined within a Convolutional Neural Network?",
        "o": [
            "It represents the absolute size of the output feature map produced by the layer.",
            "It defines the specific spatial region within the original input volume that directly affects the activation of that neuron.",
            "It indicates the total number of individual filters present in the convolutional layer.",
            "It represents the maximum numerical value the neuron is capable of outputting."
        ],
        "a": 1,
        "e": "The receptive field denotes how much spatial context from the input image a particular neuron 'sees'.",
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "Why are Convolutional Neural Networks (CNNs) considered superior to Fully Connected Networks (MLPs) for processing high-dimensional image data?",
        "o": [
            "CNNs utilize significantly more parameters, allowing for greater memorization of data.",
            "CNNs leverage spatial locality and shared weights across the image, drastically reducing the parameter count while maintaining translation invariance.",
            "CNNs inherently bypass the need for backpropagation during training.",
            "CNNs are exclusively optimized for processing 1D sequential vectors."
        ],
        "a": 1,
        "e": "A convolutional kernel slides across the image, sharing the same weights everywhere and detecting local patterns.",
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "What is the exact mathematical effect of applying a 'Max Pooling' operation utilizing a 2x2 filter with a stride of 2?",
        "o": [
            "The spatial dimensions (width and height) of the incoming feature map are exactly halved.",
            "The total number of feature channels is doubled.",
            "The network generates and learns new weight parameters specific to the pooling region.",
            "All negative activation values within the window are strictly set to zero."
        ],
        "a": 0,
        "e": "Pooling downsamples the feature map by selecting the maximum value in each 2x2 window, providing translation invariance and reducing compute.",
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "How does the 'Vanishing Gradient' problem manifest in the training of deep neural networks?",
        "o": [
            "It occurs when the learning rate hyperparameter is configured too aggressively.",
            "It happens when gradients become exponentially small as they propagate backward through multiple layers, effectively halting the weight updates in the earliest layers.",
            "It happens when the calculated loss function reaches exactly zero.",
            "It manifests strictly when the training dataset lacks sufficient samples."
        ],
        "a": 1,
        "e": "Deep networks suffer from vanishing gradients, which architectures like ResNet solve using skip connections.",
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "In the configuration of a Convolutional Layer, what specific structural purpose does 'Padding' serve?",
        "o": [
            "It artificially increases the total number of output channels generated by the layer.",
            "It adds border pixels (typically zeros) around the input, allowing the kernel to process the edges and preserving the original spatial dimensions in the output.",
            "It algorithmically reduces the learning rate as the filter approaches the edges.",
            "It systematically prunes small, insignificant weights from the kernel."
        ],
        "a": 1,
        "e": "Padding (like 'same' padding) ensures the output feature map has the same width/height as the input.",
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "What is the core architectural innovation implemented in the 'Fire Module' of SqueezeNet?",
        "o": [
            "It utilizes exclusively large 5x5 filters to maximize the receptive field.",
            "It features a 'Squeeze' layer comprised of 1x1 filters followed by an 'Expand' layer that concatenates the outputs of parallel 1x1 and 3x3 filters.",
            "It eliminates all convolutional operations, relying solely on Fully Connected layers.",
            "It relies exclusively on Depthwise Separable Convolutions to process spatial features."
        ],
        "a": 1,
        "e": "The Fire Module reduces parameters by squeezing the channel depth before applying the expensive 3x3 filters.",
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "In the MobileNetV1 architecture, how is a standard convolution operation mathematically decomposed to improve efficiency?",
        "o": [
            "It is split into a Depthwise convolution for spatial filtering followed by a Pointwise convolution (1x1) for cross-channel combination.",
            "It is separated into a standard 3x3 convolution immediately followed by an aggressive Max Pooling layer.",
            "It is reduced into two sequential 1x1 convolutions to compress channel depth.",
            "It is decomposed into a sparse fully connected layer followed by a ReLU activation."
        ],
        "a": 0,
        "e": "Depthwise separable convolutions split spatial and cross-channel filtering, drastically reducing MACs.",
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "What is the fundamental reason MobileNetV2 employs a 'Linear Bottleneck' instead of a standard non-linear activation?",
        "o": [
            "To artificially inflate the total MAC count for more robust feature extraction.",
            "Because non-linearities like ReLU destroy critical information when applied to low-dimensional manifolds.",
            "To ensure the resulting model architecture is strictly compatible with GPU acceleration.",
            "To entirely replace the need for a terminal Softmax classification layer."
        ],
        "a": 1,
        "e": "Applying ReLU in a bottleneck (low-channel) layer collapses the manifold; keeping it linear preserves information.",
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "What specific architectural mechanism does ShuffleNet introduce to mitigate the isolation issues caused by Group Convolutions?",
        "o": [
            "A 'Channel Shuffling' operation designed to enable information to flow freely across disparate channel groups.",
            "The complete removal of group convolutions in favor of dense point-wise layers.",
            "A significant increase in the spatial kernel size to 7x7.",
            "The mandatory utilization of floating-point 64-bit weights."
        ],
        "a": 0,
        "e": "Group convolutions block cross-group information flow; shuffling the channels restores this representation power.",
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "What is the primary computational hypothesis behind the design of the GhostNet architecture?",
        "o": [
            "It relies on 'invisible' layers that are skipped dynamically during the inference phase.",
            "It theorizes that feature maps are highly redundant; therefore, it generates a few intrinsic maps with standard convolutions and generates the 'ghost' variations using extremely cheap linear operations.",
            "It assumes that training can be accomplished without the backpropagation of a loss function.",
            "It posits that complex models can be built exclusively using 1x1 convolutions."
        ],
        "a": 1,
        "e": "GhostNet assumes many feature maps are redundant/similar, so it generates them cheaply rather than using full convolutions.",
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "In the context of Post-Training Quantization (PTQ), how does Asymmetric quantization differ mathematically from Symmetric quantization?",
        "o": [
            "Symmetric quantization maps the floating-point zero to an arbitrary non-zero integer.",
            "Asymmetric quantization utilizes a 'Zero-Point' offset to map unbalanced floating-point ranges to the integer space, whereas Symmetric quantization forces the range to be centered around zero.",
            "Symmetric quantization is applied exclusively to weights, while Asymmetric quantization is strictly for activations.",
            "Asymmetric quantization operates at 4-bit precision, whereas Symmetric uses standard 8-bit precision."
        ],
        "a": 1,
        "e": "Symmetric restricts the range to be equal on positive and negative sides, which is inefficient if the data is heavily skewed (like ReLU outputs).",
        "src": "07 - Approximate Computing"
    },
    {
        "q": "What specific mechanism characterizes 'Quantization-Aware Training' (QAT)?",
        "o": [
            "The execution of the training loop on a specialized quantum computing simulator.",
            "The insertion of 'Fake Quantization' nodes into the training graph to simulate rounding errors, forcing the network to adapt its weights to precision loss during the forward pass.",
            "The manual quantization of all dataset images into 8-bit integers prior to training.",
            "The algorithmic early termination of the training process once weights approach zero."
        ],
        "a": 1,
        "e": "QAT simulates the low-precision forward pass so the backward pass can adjust weights to minimize the quantization accuracy drop.",
        "src": "07 - Approximate Computing"
    },
    {
        "q": "Which of the following descriptions accurately defines 'Structured Pruning'?",
        "o": [
            "The algorithmic removal of individual random weights based on a static magnitude threshold.",
            "The systematic removal of entire rows, columns, or complete filters from weight matrices to maintain dense computational structures.",
            "The exclusive pruning of bias vectors without altering the primary weight tensors.",
            "The reduction of the training dataset by removing statistically insignificant samples."
        ],
        "a": 1,
        "e": "Structured pruning aligns with hardware SIMD units, providing actual speedups without branching overhead.",
        "src": "07 - Approximate Computing"
    },
    {
        "q": "How is 'Weight Sharing' (or Weight Clustering) implemented to achieve model compression?",
        "o": [
            "By indiscriminately copying weights from earlier layers to initialize subsequent deeper layers.",
            "By clustering mathematically similar weights and representing them strictly with low-bit indices that point to a shared codebook of centroid values.",
            "By distributing the model's weight matrices over a local Wi-Fi network to edge clients.",
            "By forcing all convolutional filters in a specific layer to use identical weight values."
        ],
        "a": 1,
        "e": "It drastically reduces Flash footprint because you only store a small codebook and low-bit indices instead of full weights.",
        "src": "07 - Approximate Computing"
    },
    {
        "q": "Why does the Multiply-Accumulate operation of INT8 weights and activations strictly require an accumulator larger than 8 bits (e.g., 32-bit)?",
        "o": [
            "To natively support the occasional floating-point operation during inference.",
            "Because accumulating the sum of numerous 16-bit intermediate products (derived from INT8 x INT8 multiplication) will immediately overflow an 8-bit or 16-bit register.",
            "To forcefully increase the clock speed of the Microcontroller.",
            "To have dedicated memory space allocated for the Zero-Point offset."
        ],
        "a": 1,
        "e": "A MAC operation accumulates many products; a 32-bit register provides the necessary headroom to prevent overflow.",
        "src": "07 - Approximate Computing"
    },
    {
        "q": "What is the fundamental objective driving the design of an 'Early Exit' neural network architecture?",
        "o": [
            "To significantly reduce the total number of epochs required during the training phase.",
            "To dynamically reduce average inference latency and energy consumption by halting computation whenever an intermediate classifier is sufficiently confident.",
            "To artificially inflate the final top-1 accuracy metric of the network on complex datasets.",
            "To provide an emergency software exit if a hardware error is detected during inference."
        ],
        "a": 1,
        "e": "Easy inputs can be classified by early layers, saving the compute cost of deeper layers.",
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "Which statistical metric is predominantly utilized to evaluate the 'confidence' of an intermediate Early Exit branch?",
        "o": [
            "The total cumulative MAC operations executed up to that specific branch.",
            "The Shannon Entropy or the Maximum Probability derived from the Softmax output of the branch.",
            "The thermal readings from the MCU's internal temperature sensor.",
            "The statistical variance of the raw input image pixels."
        ],
        "a": 1,
        "e": "Low entropy or a high max probability indicates the classifier is highly confident in its prediction.",
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "What specific training methodology is required to properly optimize a branching Early Exit network?",
        "o": [
            "Training is applied exclusively to the final, deepest classification layer.",
            "The network is optimized using a joint loss function that sums the loss of the final classifier with the weighted losses of all auxiliary branches simultaneously.",
            "Each individual branch must be trained iteratively on completely isolated and different datasets.",
            "The network relies entirely on unsupervised clustering techniques."
        ],
        "a": 1,
        "e": "Joint training forces early layers to extract discriminative features sooner, satisfying the auxiliary classifiers.",
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "What is a known architectural trade-off or negative side-effect of attaching auxiliary Early Exit branches to a deep backbone network?",
        "o": [
            "It renders the resulting network mathematically impossible to quantize to INT8.",
            "The aggressive gradients from auxiliary branches can interfere with the complex feature representations required by the final, deepest classifier, potentially degrading maximum accuracy.",
            "It strictly mandates the use of 64-bit floating-point precision across all operations.",
            "It physically prevents the MCU from entering low-power sleep modes."
        ],
        "a": 1,
        "e": "Early branches force the backbone to prioritize immediate classification, sometimes degrading the complex features needed later.",
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "During the inference phase of an Early Exit network, what is the defined behavior if an intermediate branch's confidence fails to meet the required threshold?",
        "o": [
            "The software stack throws an unhandled exception error.",
            "The system immediately rejects the input sample as an out-of-distribution anomaly.",
            "Inference simply continues forward into the deeper blocks to evaluate the subsequent branches or final classifier.",
            "The system commands a hard restart of the Microcontroller."
        ],
        "a": 2,
        "e": "The data simply flows deeper into the network to gain a better representation for classification.",
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "In the context of deployed edge sensors, how is 'Concept Drift' formally defined?",
        "o": [
            "The physical shifting or degradation of the sensor's mounting hardware.",
            "A progressive change in the underlying statistical properties of the target variable over time (e.g., due to machinery wear), resulting in the degradation of a static pre-trained model.",
            "The gradual leakage of charge within the MCU's non-volatile Flash memory.",
            "The inevitable shifting of weight distributions caused by aggressive post-training quantization."
        ],
        "a": 1,
        "e": "Concept drift breaks the IID assumption; the live data no longer matches the training data distribution.",
        "src": "09 - On-device Learning"
    },
    {
        "q": "Why is the 'Freezing' of early backbone layers considered critical when implementing On-device Learning on memory-constrained MCUs?",
        "o": [
            "It prevents the Microcontroller's core from exceeding its thermal limits during operation.",
            "It drastically reduces SRAM requirements because the forward activations for frozen layers do not need to be stored in memory for the backpropagation step.",
            "It ensures the model remains fully open-source and compliant with licensing.",
            "It algorithmically transforms the deep neural network into a flat decision tree."
        ],
        "a": 1,
        "e": "Backprop requires storing intermediate activations; freezing layers removes this memory burden.",
        "src": "09 - On-device Learning"
    },
    {
        "q": "What phenomenon does the term 'Catastrophic Forgetting' describe in the domain of incremental machine learning?",
        "o": [
            "The irreversible corruption of the Flash memory sector storing the model weights.",
            "A scenario where learning a new class or task causes the neural network's weights to update aggressively, leading to the rapid loss of previously learned representations.",
            "The event where the user loses the cryptographic key to the MCU.",
            "The resetting of the quantization zero-point to a default state after a power cycle."
        ],
        "a": 1,
        "e": "NNs overwrite old weights when learning new data unless mitigation strategies (like replay) are used.",
        "src": "09 - On-device Learning"
    },
    {
        "q": "How does the 'Latent Replay' strategy function to support on-device learning while navigating strict memory constraints?",
        "o": [
            "By strictly replaying audio files to the user for manual validation.",
            "By continuously uploading raw sensor data to the cloud for historical storage.",
            "By storing compressed intermediate activations (latent patterns) of historical data to interleave with new data during training, effectively preventing forgetting without requiring massive raw data storage.",
            "It is purely a gamification term for interactive ML."
        ],
        "a": 2,
        "e": "Storing latent vectors uses much less memory than raw data, while still reminding the network of past classes.",
        "src": "09 - On-device Learning"
    },
    {
        "q": "What architectural feature differentiates 'Federated Learning' from standard, isolated 'On-device Personalization'?",
        "o": [
            "Federated learning operates exclusively on a single, disconnected device without any external communication.",
            "In Federated Learning, distributed local devices compute weight updates independently and share only those gradients with a central server to aggregate a global model, thereby preserving raw data privacy.",
            "Federated learning relies solely on non-parametric models like random forests.",
            "Federated learning strictly requires no training phase whatsoever."
        ],
        "a": 1,
        "e": "Federated Learning is a distributed collaborative approach, while standard on-device learning adapts a model for a single user locally.",
        "src": "09 - On-device Learning"
    },
    {
        "q": "Based on the Truesense architectural PitchDeck, why is a 60GHz Ultra-Wideband (UWB) Radar sensor selected over standard RGB camera vision for smart healthcare applications?",
        "o": [
            "UWB radar provides a significantly higher spatial resolution than 4K optical cameras.",
            "It delivers robust structural and motion sensing capabilities (e.g., detecting respiration or falls) while strictly guaranteeing visual privacy since no optical identity is captured.",
            "UWB radar systems require vastly more ambient lighting to function.",
            "UWB radar is designed to operate exclusively in outdoor environments."
        ],
        "a": 1,
        "e": "Radar doesn't capture visual identity, making it ideal for privacy-sensitive areas like healthcare or smart homes.",
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "What represents a primary Machine Learning challenge when attempting to process UWB Radar signals directly on the edge?",
        "o": [
            "Radar frequency data is mathematically un-quantizable into integer formats.",
            "Processing the complex, multi-dimensional radar tensors (such as dense Range-Doppler maps) requires significant memory and MAC throughput, severely pushing the limits of standard MCUs.",
            "Radar sensors are entirely analog and do not interface with digital ML pipelines.",
            "Radar signals operate in a vacuum and are completely immune to environmental noise."
        ],
        "a": 1,
        "e": "Radar point clouds or micro-Doppler maps are dense tensors requiring aggressive optimization to fit on an MCU.",
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "Which class of neural network architectures is generally most effective for classifying sequential, temporal gestures derived from radar micro-Doppler signatures?",
        "o": [
            "A single, flat Fully Connected Layer.",
            "Convolutional Neural Networks (treating the spectrogram as a 2D image) or Recurrent/LSTM networks (modeling the temporal sequence of the signature).",
            "Unsupervised K-Means Clustering algorithms.",
            "Static, hard-coded lookup tables."
        ],
        "a": 1,
        "e": "Micro-Doppler signatures are time-frequency representations (spectrograms) perfectly suited for CNNs or RNNs.",
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "Within the Truesense operational paradigm, why is processing data via 'Edge AI' deemed critical as opposed to streaming raw radar data to a centralized cloud?",
        "o": [
            "Streaming raw 60GHz radar data requires massive, continuous network bandwidth and introduces unacceptable latency and privacy risks.",
            "Cloud computing architectures are fundamentally unable to execute Python scripts.",
            "The volume of raw radar data is too minimal to justify the overhead of a cloud API connection.",
            "Local Wi-Fi networks invariably create electromagnetic interference with the radar frequencies."
        ],
        "a": 0,
        "e": "Raw radar produces huge data streams. Processing locally extracts just the metadata (e.g., 'Person fell'), saving bandwidth and privacy.",
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "In a typical radar-based classification pipeline, what specific computational block must precede the Neural Network inference?",
        "o": [
            "A physical, mechanical actuator response.",
            "A heavy Digital Signal Processing (DSP) block utilizing operations like FFTs, clutter removal, and CFAR to convert raw ADC signals into structured features.",
            "An integrated text-to-speech synthesis engine.",
            "A mandatory cloud-based API authentication call."
        ],
        "a": 1,
        "e": "Raw radar IF signals must be heavily processed via DSP to extract Range, Doppler, and Angle information before ML is applied.",
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    }
];

const openPool = [
    {
        "q": "THEORY: Define the concept of 'TinyML'. How does it differ from traditional Edge AI in terms of hardware constraints, power consumption, and typical use cases?",
        "a": "TinyML refers to deploying ML models on Microcontrollers (MCUs). Constraints: SRAM < 512KB, Flash < 2MB. Power: mW or µW, often battery-powered for months/years. Use cases: Always-on wake-word detection, predictive maintenance, simple anomaly detection. Edge AI is broader and includes powerful gateways (Watts of power, MBs/GBs of RAM) like Jetson Nanos for complex video processing.",
        "pts": 5,
        "src": "01 - Intro to the course"
    },
    {
        "q": "SYSTEM DESIGN: Design a high-level sensing-to-actuation pipeline for an always-on acoustic glass-break detector. Specify where DSP and ML fit in.",
        "a": "1. Sensor: MEMS Microphone captures audio. 2. ADC: Digitizes analog signal. 3. DSP: Applies Windowing and FFT to generate a Mel-Spectrogram (frequency domain). 4. ML: A quantized CNN/DS-CNN classifies the spectrogram as 'Glass Break' or 'Noise'. 5. Actuation: If positive, trigger a GPIO pin to wake up the main alarm system.",
        "pts": 5,
        "src": "01 - Intro to the course"
    },
    {
        "q": "CALCULATION: An edge device has a battery of 2000 mAh at 3.3V. If the MCU consumes 10mA during active ML inference and 10µA in deep sleep, calculate the average current and estimated battery life if inference runs for 1 second every 10 seconds.",
        "a": "Active duty cycle: 1s / 10s = 10% (0.1). Sleep duty cycle: 90% (0.9).\nAverage Current = (10mA * 0.1) + (0.01mA * 0.9) = 1.0mA + 0.009mA = 1.009 mA.\nBattery Life = Capacity / Avg Current = 2000 mAh / 1.009 mA ≈ 1982 hours ≈ 82.5 days.",
        "pts": 5,
        "src": "01 - Intro to the course"
    },
    {
        "q": "THEORY: Explain the 'Application Error Rate' (AER). Why might a neural network with 99% accuracy still result in a poor AER in a real-world edge deployment?",
        "a": "AER covers the entire pipeline. Even with a 99% accurate NN, if the sensor is noisy, the ADC clips the signal, or the DSP windowing introduces artifacts, the input to the NN will be corrupted. The pipeline's total reliability is the product of all stage reliabilities. Also, 99% accuracy might mean a high false-positive rate in continuous 'always-on' streaming.",
        "pts": 5,
        "src": "01 - Intro to the course"
    },
    {
        "q": "THEORY: Discuss the privacy and latency advantages of Edge AI over Cloud AI for medical wearable devices.",
        "a": "Privacy: Raw physiological data (e.g., ECG, voice) never leaves the body; only aggregated insights (e.g., 'Arrhythmia detected') are transmitted, complying with GDPR/HIPAA. Latency: Local processing ensures deterministic, real-time responses (milliseconds) independent of network connectivity, which is critical for medical emergencies.",
        "pts": 5,
        "src": "01 - Intro to the course"
    },
    {
        "q": "HARDWARE ANALYSIS: Compare SRAM and Flash memory on a standard MCU (e.g., ESP32-S3) in terms of capacity, volatility, speed, and their specific roles in running Neural Networks.",
        "a": "SRAM: Volatile, fast read/write, small capacity (e.g., 512KB). Role: Stores input buffers, intermediate activations (feature maps), and the call stack. Flash: Non-volatile, slower read/write, larger capacity (e.g., 4-16MB). Role: Stores the compiled firmware, TFLite Micro interpreter, and the constant weights/biases of the model.",
        "pts": 5,
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "THEORY: What are SIMD instructions? Explain how the PIE (Power-efficient Instruction Extensions) on the ESP32-S3 accelerate Deep Learning.",
        "a": "Single Instruction Multiple Data allows one CPU instruction to perform the same operation on an array of data simultaneously. PIE provides specific 128-bit vector registers and instructions for the Xtensa core, allowing it to load multiple INT8 weights and activations and perform parallel MAC (Multiply-Accumulate) operations in a single clock cycle, drastically speeding up convolutions.",
        "pts": 5,
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "THEORY: Explain the concept of 'Direct Memory Access' (DMA) and why it is critical for sensor-based Edge AI.",
        "a": "DMA is a hardware feature that allows peripherals (like an ADC, I2S microphone, or SPI camera) to write incoming data directly to the SRAM without interrupting the CPU. This is critical because the CPU can remain entirely dedicated to computing the heavy ML inference MACs, rather than wasting cycles moving bytes from the peripheral to memory.",
        "pts": 5,
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "HARDWARE ANALYSIS: What is the 'Memory Wall' in edge computing? How does the energy cost of memory access compare to the energy cost of a MAC operation?",
        "a": "The Memory Wall refers to the bottleneck where fetching data from memory (SRAM or external PSRAM) takes significantly more time and energy than performing the arithmetic MAC operation itself. For example, reading a 32-bit value from SRAM can cost orders of magnitude more pJ (picojoules) than a standard ALU addition. This necessitates optimizations like Kernel Fusion to keep data in registers.",
        "pts": 5,
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "SYSTEM DESIGN: Discuss the role of a ULP (Ultra-Low-Power) co-processor in a wake-up architecture.",
        "a": "The ULP is a tiny, highly efficient core that stays awake while the main powerful CPU (like the Xtensa dual-core) sleeps. The ULP continuously polls sensors (e.g., IMU or mic) using very basic logic or a tiny decision tree. When an interesting event (wake-word or anomaly) is detected, the ULP triggers an interrupt to wake the main CPU, which then boots up and runs the heavy CNN for verification.",
        "pts": 5,
        "src": "02 - Embedded and Edge Hardware"
    },
    {
        "q": "THEORY: Explain 'Spectral Leakage' in FFT and how 'Windowing' resolves it. Name two common window functions.",
        "a": "FFT assumes the input signal is infinitely periodic. If the sampled frame doesn't contain an integer number of cycles, the edges create sharp artificial discontinuities, causing energy to 'leak' into adjacent frequency bins. Windowing multiplies the frame by a curve that tapers to zero at the edges, smoothing the transition. Examples: Hamming, Hanning (Hann) windows.",
        "pts": 5,
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "EXERCISE: A vibration sensor samples at 1000 Hz. You apply an FFT to a window of 250 samples. What is the frequency resolution (bin width) of the resulting spectrum? What is the maximum observable frequency (Nyquist)?",
        "a": "1. Frequency Resolution = Sampling Rate / Window Size = 1000 Hz / 250 = 4 Hz per bin.\n2. Maximum Observable Frequency (Nyquist limit) = Sampling Rate / 2 = 1000 Hz / 2 = 500 Hz.",
        "pts": 5,
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "THEORY: Discuss the use of 'Low pass', 'High pass', and 'Band pass' filters in digital signal preprocessing for embedded AI. Provide an example use case.",
        "a": "Low pass filters keep low frequencies and remove high-frequency noise. High pass filters keep high frequencies and remove low-frequency drift. Band pass filters isolate a specific range of interest. For example, in a speech recognition application, a Band pass filter from 100Hz to 4KHz is used to isolate the human voice band and discard background noise outside this range.",
        "pts": 5,
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "SYSTEM DESIGN: You need to extract features from a human speech signal for a lightweight classifier. Why is a Mel-Spectrogram preferred over a standard raw FFT spectrogram?",
        "a": "Human hearing is non-linear; we are more sensitive to changes in low frequencies than high frequencies. A Mel-Spectrogram maps the linear FFT frequency bins onto the Mel scale (logarithmic-like) using a filter bank. This compresses the data, reducing the input dimensionality for the ML model while emphasizing the frequencies that carry the most distinct speech information.",
        "pts": 5,
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "THEORY: What is 'Downsampling' and what theorem strictly governs how it must be performed to avoid aliasing?",
        "a": "Downsampling reduces the sampling rate of a signal by keeping only every Nth sample. It is governed by the Nyquist-Shannon Sampling Theorem. Before downsampling, the signal MUST be passed through a low-pass anti-aliasing filter to remove any frequencies higher than half of the NEW sampling rate; otherwise, high frequencies will fold back (alias) into the lower frequencies, permanently corrupting the data.",
        "pts": 5,
        "src": "03 - Algorithms for EEAI"
    },
    {
        "q": "EXERCISE: A dataset for a rare machine failure has 990 Normal samples and 10 Failure samples. A model predicts 'Normal' for everything. Calculate the Accuracy, Precision, and Recall for the 'Failure' class.",
        "a": "Total = 1000. True Positives (Failure predicted correctly) = 0. False Positives (Normal predicted as Failure) = 0. False Negatives (Failure predicted as Normal) = 10. True Negatives = 990.\nAccuracy = (TP + TN) / Total = 990 / 1000 = 99%.\nPrecision = TP / (TP + FP) = 0 / 0 = Undefined (or 0).\nRecall = TP / (TP + FN) = 0 / 10 = 0%.",
        "pts": 5,
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "THEORY: Explain 'Data Leakage' in the context of Time-Series sensor data. How does improper random shuffling cause this?",
        "a": "Time-series data points physically close in time are highly correlated. If you randomly shuffle and split the dataset 80/20, adjacent frames from the same continuous motion will end up in both the Train and Test sets. The model effectively 'memorizes' the specific background noise or session context rather than learning the generalized feature, resulting in artificially high test scores that fail in real-world deployment.",
        "pts": 5,
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "THEORY: Describe the 'Random Forest' algorithm. Why does an ensemble of trees generalize better than a single deep Decision Tree?",
        "a": "Random Forest builds multiple independent decision trees during training. It injects randomness through 'Bagging' (training each tree on a random subset of data) and 'Feature Randomness' (considering only a random subset of features at each split). A single deep tree overfits the training noise. The ensemble averages the predictions (voting), which drastically reduces variance and prevents overfitting without sacrificing complex representation power.",
        "pts": 5,
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "SYSTEM DESIGN: You are deploying a model using Support Vector Machines (SVM). Discuss the trade-off between using a Linear Kernel vs an RBF (Radial Basis Function) Kernel on a microcontroller.",
        "a": "Linear Kernel: Very efficient for inference; it boils down to a simple dot product of the input vector and a single weight vector (O(N) complexity). RBF Kernel: Can model highly complex, non-linear boundaries by mapping data to infinite dimensions. However, inference requires calculating the exponential distance between the input and EVERY Support Vector, making it highly computationally expensive (O(N * #SVs)) and memory-heavy for an MCU.",
        "pts": 5,
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "THEORY: What is 'Leave-One-Subject-Out' (LOSO) Cross Validation? Why is it the gold standard for wearable/biometric ML?",
        "a": "In LOSO, if you have N subjects/users in your dataset, you train the model N times. Each time, you train on N-1 subjects and test exclusively on the data of the 1 held-out subject. Because biometric data (like gait or voice) is highly unique to individuals, LOSO proves that the model has learned the underlying generic concept and can successfully generalize to a completely new user who buys the wearable device.",
        "pts": 5,
        "src": "04 - Machine Learning for EEAI"
    },
    {
        "q": "CALCULATION: Calculate the total MACs for a standard Convolution layer. Input: 16x16 feature map with 32 channels. Filter: 3x3 kernel, 64 output channels. Stride 1, Padding 'same' (output is 16x16).",
        "a": "Output spatial dimensions: 16x16.\nMACs per output pixel (spatial spot): Kernel_H * Kernel_W * Input_Channels = 3 * 3 * 32 = 288.\nTotal MACs = Output_H * Output_W * Output_Channels * MACs_per_pixel = 16 * 16 * 64 * 288 = 4,718,592 MACs.",
        "pts": 5,
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "CALCULATION: Calculate the number of trainable parameters (including bias) for the Conv layer described: 3x3 kernel, 32 input channels, 64 output channels.",
        "a": "Weights per filter: 3 * 3 * 32 = 288.\nBias per filter: 1.\nTotal parameters per filter: 289.\nTotal parameters for the layer: 289 * 64 = 18,496 parameters.",
        "pts": 5,
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "THEORY: Explain the concept of the 'Receptive Field' in deep CNNs. How do deeper layers capture global context?",
        "a": "The receptive field is the specific region of the original input image that influences a particular neuron's activation. In early layers, a 3x3 filter sees a 3x3 pixel area. Through successive convolutions and pooling (which downsamples the image), a 3x3 filter in a deep layer 'sees' a much larger area of the original image. This hierarchical expansion allows deep neurons to recognize global, complex objects (like a face) built from local features (like edges).",
        "pts": 5,
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "THEORY: What is the 'Vanishing Gradient' problem in deep neural networks, and how do activation functions like ReLU help mitigate it compared to Sigmoid?",
        "a": "During backpropagation, gradients are calculated using the chain rule. The Sigmoid derivative maxes out at 0.25; multiplying many such small numbers in deep layers causes the gradient to vanish to zero, stopping early layers from learning. The ReLU function (f(x) = max(0, x)) has a derivative of exactly 1 for all positive inputs. This allows gradients to flow backwards through active neurons without shrinking, enabling the training of very deep networks.",
        "pts": 5,
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "THEORY: Contrast the roles of 'Max Pooling' and 'Global Average Pooling' (GAP) in a CNN architecture.",
        "a": "Max Pooling: Operates on small windows (e.g., 2x2, stride 2) throughout the network to downsample the spatial dimensions, reduce computation, and provide local translation invariance. \nGAP: Typically used at the very end of the network. It takes the average of the entire spatial map for each channel, flattening a (H, W, Channels) tensor into a 1D vector of length Channels. It drastically reduces parameters by replacing the massive, prone-to-overfitting Fully Connected layer.",
        "pts": 5,
        "src": "05 - Deep learning for EEAI"
    },
    {
        "q": "DERIVATION: Contrast the MAC operations of a Standard Convolution vs a Depthwise Separable Convolution. Let Input=H*W*C, Kernel=K*K, Output Filters=F. Show the math.",
        "a": "Standard MACs: H * W * C * F * K^2.\nDepthwise Separable is split in two:\n1. Depthwise MACs: H * W * C * K^2 (spatial filtering per channel).\n2. Pointwise MACs: H * W * C * F * 1^2 (1x1 cross-channel combination).\nTotal DS MACs: H * W * C * (K^2 + F).\nRatio (DS / Standard) = (K^2 + F) / (K^2 * F) = (1/F) + (1/K^2). For large F, the reduction is roughly 1/K^2 (e.g., ~9x reduction for 3x3 filters).",
        "pts": 5,
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "SYSTEM DESIGN: Analyze the 'Inverted Residual' block in MobileNetV2. Detail the three sequential operations, their channel dimension changes, and the activation functions used.",
        "a": "1. Expansion (1x1 Pointwise): Projects the low-dimensional input to a higher dimension (e.g., factor of 6). Uses ReLU6.\n2. Spatial Filtering (3x3 Depthwise): Applies spatial filters in the high-dimensional space. Uses ReLU6.\n3. Projection/Bottleneck (1x1 Pointwise): Compresses the channels back down to a low-dimensional space. Crucially, uses a LINEAR activation (no ReLU) to prevent information destruction in the low-dimensional manifold. Finally, a skip connection adds the input to the output.",
        "pts": 5,
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "THEORY: Explain the structure of the 'Fire Module' in SqueezeNet. How does the 'Squeeze Ratio' dictate parameter reduction?",
        "a": "The Fire Module consists of two stages: a 'Squeeze' layer consisting entirely of 1x1 filters, followed by an 'Expand' layer that concatenates the outputs of parallel 1x1 and 3x3 filters. The Squeeze Ratio ensures the number of squeeze filters is small (e.g., 1/8 of the expand filters). By bottlenecking the channel depth early, the expensive 3x3 filters in the expand layer receive very few input channels, drastically minimizing the K^2 * C * F parameter count.",
        "pts": 5,
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "THEORY: What is the core problem with 'Group Convolutions' and how does the 'ShuffleNet' architecture solve it with Channel Shuffling?",
        "a": "Group convolutions divide the input channels into disjoint groups, applying filters only within each group. This reduces MACs but prevents information from flowing between groups, weakening the representation. ShuffleNet introduces a 'Channel Shuffle' operation after the group convolution. It transposes and reorganizes the channels so that the next group convolution receives input features from all previous groups, restoring cross-channel communication without adding MACs.",
        "pts": 5,
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "THEORY: Describe the fundamental hypothesis behind 'GhostNet' and how it translates into its architectural blocks.",
        "a": "GhostNet hypothesizes that trained deep networks contain many highly similar, redundant feature maps ('ghosts' of each other). Instead of using expensive standard convolutions to generate all of them, a Ghost Module uses standard convolutions to generate a small set of 'intrinsic' feature maps. It then applies very cheap, linear operations (like depthwise convolutions) to these intrinsic maps to generate the redundant 'ghost' maps, cutting computation and parameters by half.",
        "pts": 5,
        "src": "06 - Architectures for EEAI"
    },
    {
        "q": "DERIVATION: Calculate the Scale (S) and Zero-Point (Z) for Asymmetric INT8 Quantization mapping the floating-point range [-1.5, 6.0] to the integer range [-128, 127].",
        "a": "1. FP Range = Max - Min = 6.0 - (-1.5) = 7.5.\n2. INT Range = 127 - (-128) = 255.\n3. Scale (S) = FP Range / INT Range = 7.5 / 255 ≈ 0.02941.\n4. Zero-Point (Z) = Round( -Min/S + Q_Min ) = Round( -(-1.5) / 0.02941 + (-128) ) = Round( 51.0 - 128 ) = -77.\nZ = -77.",
        "pts": 5,
        "src": "07 - Approximate Computing"
    },
    {
        "q": "THEORY: Explain the fundamental differences between Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT). Mention calibration vs. fake quantization.",
        "a": "PTQ is applied after a model is fully trained. It requires a small calibration dataset to run through the FP32 model offline, monitoring activation distributions to calculate static Scales and Zero-Points. It is fast but can cause accuracy drops. \nQAT modifies the training graph by inserting 'Fake Quantization' nodes. These nodes simulate the clipping and rounding of INT8 during the forward pass. The network learns to adapt its weights to survive the precision loss. It requires the full training dataset and longer training time, but yields accuracy near FP32 levels.",
        "pts": 5,
        "src": "07 - Approximate Computing"
    },
    {
        "q": "HARDWARE ANALYSIS: Explain how 'Kernel Fusion' (Layer Fusion) optimizes execution on Edge hardware. Use Conv + Bias + ReLU as an example.",
        "a": "Without fusion, the CPU reads inputs from SRAM, runs the Conv MACs, writes outputs to SRAM. Then reads them back, adds Bias, writes to SRAM. Then reads, applies ReLU, writes to SRAM. This hits the 'Memory Wall'. \nKernel Fusion rewrites the C/assembly loops so that once a pixel's convolution is computed in the CPU accumulator register, the Bias and ReLU are applied immediately in the register. The final result is written to SRAM once. This minimizes costly memory bandwidth.",
        "pts": 5,
        "src": "07 - Approximate Computing"
    },
    {
        "q": "THEORY: Contrast 'Structured' and 'Unstructured' Pruning. Why does unstructured pruning often fail to provide actual latency speedups on generic MCUs?",
        "a": "Unstructured pruning removes individual weights randomly based on a magnitude threshold, creating a sparse matrix. Standard MCUs rely on dense SIMD operations; processing sparse matrices requires complex indexing and branching (if weight != 0), which destroys pipeline efficiency and can make execution slower.\nStructured pruning removes entire channels, filters, or blocks. The resulting matrix remains dense (just smaller), directly translating to fewer MACs and immediate latency/memory speedups on any hardware.",
        "pts": 5,
        "src": "07 - Approximate Computing"
    },
    {
        "q": "THEORY: What is 'Weight Sharing' (Weight Clustering)? How does it affect Flash storage and SRAM usage during inference?",
        "a": "Weight sharing groups similar weight values into K clusters (e.g., using K-means). A codebook stores the K floating-point centroids. The massive weight matrix is replaced by a matrix of small integer indices pointing to the codebook (e.g., 4-bit indices for 16 centroids). \nImpact: Flash storage is drastically reduced. During inference, the weights are decompressed via table lookup before MAC execution, so SRAM usage for activations remains unchanged.",
        "pts": 5,
        "src": "07 - Approximate Computing"
    },
    {
        "q": "THEORY: Describe the architecture of an 'Early Exit' (Branching) Neural Network. What defines the 'Backbone' vs the 'Auxiliary Classifiers'?",
        "a": "An Early Exit network augments a standard CNN (the Backbone) by attaching shallow Auxiliary Classifiers at intermediate depths. The Backbone extracts hierarchical features. If an input is 'easy', the early layers extract enough information for an Auxiliary Classifier to make a confident prediction. If confident, inference halts immediately, saving the latency and energy of running the rest of the deep Backbone.",
        "pts": 5,
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "EXERCISE: Define 'Entropy' in the context of Softmax outputs. How is it used as a heuristic threshold for Early Exit?",
        "a": "Entropy measures uncertainty. For a probability distribution P, Entropy H = -Sum(P_i * log(P_i)). \nIf a classifier outputs [0.98, 0.01, 0.01], entropy is near zero (high confidence). If it outputs [0.33, 0.33, 0.34], entropy is high (uncertainty). In Early Exit, if the calculated Entropy of an auxiliary branch is LESS than a predefined Threshold, the network accepts the prediction and exits.",
        "pts": 5,
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "THEORY: Explain the 'Joint Loss Function' used to train branching Early Exit networks. Why is the weighting hyperparameter (alpha) critical?",
        "a": "The network cannot be trained normally. The Joint Loss sums the loss of the final classifier and the losses of all auxiliary branches: L_total = L_final + alpha_1*L_aux1 + alpha_2*L_aux2.\nThe alpha weights balance the gradients. If auxiliary alphas are too high, early layers focus only on immediate classification, ruining the feature representations needed by the deeper final classifier. If too low, early branches won't learn enough to trigger exits.",
        "pts": 5,
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "SYSTEM DESIGN: Discuss the trade-off curve involved in tuning the Confidence Threshold of an Early Exit network. What happens at the extremes?",
        "a": "The threshold dictates the Latency vs. Accuracy trade-off. \nHigh Confidence Requirement (Strict): Few samples exit early. Latency remains high (close to the full backbone), but accuracy is maximized.\nLow Confidence Requirement (Loose): Most samples exit at the first branch. Latency and energy consumption drop drastically, but accuracy plummets because the network accepts poor predictions from shallow features.",
        "pts": 5,
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "THEORY: What is the 'Overthinking' problem in deep neural networks, and how does Early Exit mitigate it?",
        "a": "Overthinking occurs when a very deep network processes a simple, clear input. The deep, highly complex layers might amplify noise or over-extract features, leading to misclassification of an image that a shallow layer would have easily gotten right. Early Exit allows the network to classify simple inputs using shallow features, preventing the deep layers from 'overthinking' and ruining the prediction.",
        "pts": 5,
        "src": "08 - Early Exit Neural Networks"
    },
    {
        "q": "THEORY: What is 'Concept Drift' in the context of deployed IoT sensors? Give an example and explain why Cloud Training struggles to address it.",
        "a": "Concept drift is when the statistical relationship between the sensor input and the target changes post-deployment. Example: A vibration sensor on a motor. As the motor bearings wear out over months, the baseline 'normal' vibration changes. The static pre-trained model degrades. Cloud training struggles because it requires transmitting massive amounts of raw, continuous vibration data back to servers, violating bandwidth and privacy limits.",
        "pts": 5,
        "src": "09 - On-device Learning"
    },
    {
        "q": "HARDWARE ANALYSIS: Why is full Backpropagation inherently hostile to Microcontroller architectures (like the ESP32-S3)? Focus on SRAM and Data Types.",
        "a": "1. SRAM limits: Forward pass only requires storing two layers of activations at a time. Backpropagation requires storing ALL intermediate activations from the forward pass to compute gradients, instantly overflowing KB-sized SRAM. \n2. Data Types: Inference uses INT8. Gradients are often tiny and require FP32 precision to avoid underflow. Accumulating FP32 gradients lacks SIMD optimization on most MCUs and explodes memory.",
        "pts": 5,
        "src": "09 - On-device Learning"
    },
    {
        "q": "SYSTEM DESIGN: Explain the 'Freezing' technique for On-device Personalization. Which layers are frozen, which are trained, and how does this solve the SRAM bottleneck?",
        "a": "Freezing locks the weights of the deep convolutional 'backbone' (Feature Extractor). Only the final Fully Connected classifier (Head) is left trainable. \nBecause the backbone is frozen, the network does NOT need to calculate or store gradients for those early layers. Forward activations can be discarded immediately. The MCU only needs enough SRAM to store the gradients for the final, relatively small Head layer.",
        "pts": 5,
        "src": "09 - On-device Learning"
    },
    {
        "q": "THEORY: Explain 'Catastrophic Forgetting' in incremental learning. How does the 'Latent Replay' strategy mitigate this on memory-constrained devices?",
        "a": "When an NN is fine-tuned on new data (e.g., a new user's voice), the gradient updates overwrite the old weights, causing it to completely forget previous users. \nLatent Replay stores historical data to mix with new data during training. Instead of storing massive raw images/audio, it stores the 'Latent Vectors' (the compressed output of the frozen backbone). Replaying these small vectors forces the Head to remember old classes without blowing up Flash/SRAM storage.",
        "pts": 5,
        "src": "09 - On-device Learning"
    },
    {
        "q": "THEORY: Contrast 'Federated Learning' with standalone 'On-device Learning'. How is privacy maintained in Federated Learning?",
        "a": "On-device learning adapts a model strictly for the local user; the updates stay on the device. \nFederated Learning is distributed. Many edge devices train locally on their private data. Instead of sending raw data to the cloud, they send only the calculated Weight Gradients. The cloud aggregates (averages) thousands of gradient updates to improve a global Master Model, which is then sent back down. Raw data privacy is mathematically preserved.",
        "pts": 5,
        "src": "09 - On-device Learning"
    },
    {
        "q": "SYSTEM DESIGN: Based on the Truesense PitchDeck, why is a 60GHz UWB Radar sensor chosen over a standard RGB camera for smart home and healthcare edge applications?",
        "a": "UWB Radar preserves absolute privacy because it does not capture optical images or identities. It can operate in complete darkness, penetrate light obstacles (clothing/blankets), and detect micro-motions like respiration or heart rate, making it ideal for bathroom fall-detection or bedroom sleep monitoring where cameras are unacceptable.",
        "pts": 5,
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "THEORY: Describe the data pipeline for processing UWB radar signals before ML inference. What is a 'Range-Doppler' or 'Micro-Doppler' map?",
        "a": "Raw radar IF (Intermediate Frequency) signals are unintelligible to NNs. They require heavy DSP. \n1. Fast Time FFT extracts Range (distance). \n2. Slow Time FFT extracts Doppler (velocity/motion). \nThis creates a 2D Range-Doppler map. Over time, plotting Doppler shifts creates a Micro-Doppler spectrogram, which visually captures the distinct kinematic signatures of human movements (like walking vs falling) for a CNN to classify.",
        "pts": 5,
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "HARDWARE ANALYSIS: What are the primary bottlenecks when deploying Radar-based Deep Learning on an ESP32-class MCU?",
        "a": "1. SRAM: Radar tensors (like multi-antenna Range-Doppler-Angle cubes) are massive. Storing these alongside CNN activations easily exceeds 512KB.\n2. Compute: Calculating 2D/3D FFTs in real-time, followed by millions of CNN MAC operations, requires extreme DSP and SIMD optimization to run within the MCU's latency and thermal limits.",
        "pts": 5,
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "THEORY: In a radar gesture recognition task, why might a 1D Temporal Convolutional Network (TCN) or RNN/LSTM be preferred over a standard 2D CNN?",
        "a": "Gestures (swipes, pushes) unfold over time. While a 2D CNN treats a spectrogram as a static image, TCNs and LSTMs are explicitly designed to model temporal dependencies and sequential state. They can maintain a memory of the gesture's trajectory, often yielding better accuracy for complex temporal radar signatures while using fewer parameters than large 2D kernels.",
        "pts": 5,
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    },
    {
        "q": "SYSTEM DESIGN: How does the Truesense architecture align with the 'Edge AI' philosophy regarding Cloud connectivity and bandwidth?",
        "a": "A 60GHz radar generates megabytes of raw data per second. Streaming this continuously to the cloud requires massive Wi-Fi bandwidth, incurs high latency, and drains power. The Truesense Edge AI approach runs the DSP and NN entirely on the local MCU. It only transmits tiny metadata payloads (e.g., 'Gesture=Swipe_Left', 'Fall=True') to the cloud, ensuring real-time response and minimal network footprint.",
        "pts": 5,
        "src": "Truesense POLIMI 18 Mar 2026 PitchDeck"
    }
];