const closedPool = [
    { 
        q: "In the context of the ESP32-S3, which architectural feature is primarily responsible for the SIMD acceleration of Neural Network (NN) kernels?", 
        o: ["The RISC-V Ultra-Low-Power (ULP) co-processor.", "The Power-efficient Instruction Extensions (PIE) in the Xtensa LX7 core.", "The dedicated hardware Neural Processing Unit (NPU).", "The internal DMA-to-Flash decryption engine."], 
        a: 1, 
        e: "The PIE instructions in the Xtensa LX7 core provide the necessary SIMD support to perform multiple MAC operations per cycle." 
    },
    { 
        q: "What is the specific internal connectivity and purpose of a 'Squeeze' layer within a SqueezeNet Fire Module?", 
        o: ["It applies 3x3 kernels to reduce the spatial resolution of activations.", "It utilizes 1x1 convolutions to reduce the channel depth before the Expand layer, minimizing parameters.", "It concatenates the output of multiple Conv layers to increase feature diversity.", "It serves as a depthwise separable filter to replace standard convolutions."], 
        a: 1, 
        e: "The Squeeze layer uses 1x1 convolutions to 'squeeze' the number of input channels, reducing the computation for the subsequent Expand layer." 
    },
    { 
        q: "In asymmetric INT8 quantization, how is the Zero-Point (Z) parameter formally defined?", 
        o: ["The integer value in the quantized range that maps precisely to the real-valued zero (0.0).", "The standard deviation of the weight distribution scaled to 8 bits.", "The minimum possible floating-point value in the calibration dataset.", "A static bias added to the accumulator to prevent integer overflow."], 
        a: 0, 
        e: "Zero-point is the integer offset used to ensure that the real-valued zero is exactly representable in the quantized space." 
    },
    { 
        q: "To minimize the peak SRAM footprint of a model during inference, which optimization target is MOST effective?", 
        o: ["Aggressive weight pruning and sparsity regularization.", "INT8 quantization of the activation buffers (feature maps).", "Storing model parameters in the off-chip external Flash memory.", "Enabling the Global Average Pooling layer before the classifier."], 
        a: 1, 
        e: "Activations are stored in SRAM during inference; quantizing them from Float32 to INT8 reduces the peak memory demand by 4x." 
    },
    { 
        q: "What is the fundamental objective of the 'Expansion' (1x1) layer in a MobileNetV2 Inverted Residual block?", 
        o: ["To reduce the channel depth and minimize the number of MACs in the depthwise layer.", "To project the low-dimensional input into a higher-dimensional space, allowing the depthwise layer to filter more complex features.", "To apply a 3x3 spatial filter across the entire input volume.", "To implement a skip connection between layers of different spatial resolutions."], 
        a: 1, 
        e: "Inverted residuals use an expansion layer to increase the internal depth, as filtering in low-dimensional space is less effective." 
    },
    { 
        q: "In an 'Early Exit' neural network architecture, what typically triggers the decision to stop inference at an intermediate classifier?", 
        o: ["A pre-defined timer based on the target device's CPU frequency.", "A confidence metric (e.g., softmax entropy or max probability) exceeding a set threshold.", "The detection of a low-battery state on the edge device.", "The spatial resolution of the intermediate feature map falling below a certain limit."], 
        a: 1, 
        e: "If the intermediate classifier is 'confident' enough about the prediction, the system exits to save latency and energy." 
    },
    { 
        q: "Why is 'Static Post-Training Quantization (PTQ)' generally preferred over 'Dynamic PTQ' for real-time inference on Microcontrollers?", 
        o: ["Static PTQ does not require a representative calibration dataset.", "It avoids the on-the-fly calculation of activation scales, significantly reducing per-layer latency.", "It allows for the dynamic re-training of the model weights on the device.", "It is the only method that supports non-linear activation functions like Swish."], 
        a: 1, 
        e: "Static PTQ calculates scales and zero-points offline during calibration, making inference faster by using fixed parameters." 
    },
    { 
        q: "What does 'Hardware-Aware' optimization specifically imply in the Embedded AI development lifecycle?", 
        o: ["The process of selecting the most expensive hardware available in the market.", "Optimizing the model architecture (e.g., through NAS) considering the specific constraints (SRAM, MACs, Flash) of the target MCU.", "Training the model exclusively on the target microcontroller instead of a GPU.", "Using cloud-based servers to prune a model until it fits into a smartphone's memory."], 
        a: 1, 
        e: "Hardware-aware design ensures that the model's peak memory and computational complexity align with the device's specific capabilities." 
    },
    { 
        q: "In a Depthwise Separable Convolution block, which sub-layer typically accounts for the majority of the total MAC (Multiply-Accumulate) operations?", 
        o: ["The Depthwise Convolution layer (3x3 spatial filtering).", "The Pointwise Convolution layer (1x1 cross-channel combination).", "The Batch Normalization layer.", "The ReLU6 activation layer."], 
        a: 1, 
        e: "While the depthwise layer handles spatial filtering, the pointwise layer (1x1) usually consumes ~90% of the total MACs." 
    },
    { 
        q: "What is the primary operational benefit of 'Kernel/Layer Fusion' (e.g., combining Conv, Bias, and ReLU) in libraries like ESP-DL?", 
        o: ["It significantly increases the top-1 accuracy of the quantized model.", "It reduces memory bandwidth overhead by avoiding multiple reads/writes of intermediate results to SRAM.", "It allows the CPU to enter a low-power sleep mode between layers.", "It enables the use of larger kernels (e.g., 7x7) without increasing memory usage."], 
        a: 1, 
        e: "Fusion minimizes memory bandwidth by keeping intermediate data in the CPU registers, minimizing the energy and time spent accessing the SRAM." 
    },
    {
        q: "In the ESP-NN library, which optimization is primarily used to speed up INT8 convolutions?",
        o: ["Auto-vectorization using the RISC-V F-extension.", "Manual assembly optimization using Xtensa PIE SIMD instructions.", "Offloading the entire kernel to the external PSRAM.", "Using Float32 emulation on the ULP co-processor."],
        a: 1,
        e: "ESP-NN provides hand-optimized assembly kernels for Xtensa PIE to maximize MAC throughput."
    },
    {
        q: "What is the 'Quantization Bias' issue and how is it mitigated in symmetric quantization?",
        o: ["Bias is caused by non-zero mean activations and is mitigated by using a zero-point.", "Bias is the loss of small weights and is mitigated by increasing the number of filters.", "Bias is the overflow of 8-bit registers and is mitigated by 16-bit accumulators.", "Bias is the mismatch between training and test sets."],
        a: 0,
        e: "Symmetric quantization (zero-point = 0) can suffer from bias if the range is not centered; asymmetric quantization with a zero-point is the common solution."
    },
    {
        q: "Which specific layer in the MobileNetV2 architecture contains the 'Expansion' factor to prevent information loss in low-dimensional manifolds?",
        o: ["The Depthwise Convolution layer.", "The 1x1 Pointwise Convolution at the start of the Bottleneck block.", "The Global Average Pooling layer.", "The final Softmax classifier."],
        a: 1,
        e: "MobileNetV2 uses an expansion layer to project data into a higher dimensional space before the depthwise filter to minimize information loss."
    },
    {
        q: "In the context of on-device training, what is the 'Freezing' technique?",
        o: ["Putting the MCU in deep sleep to save power.", "Keeping early feature extraction layers fixed and only updating the final classifier weights.", "Stopping the training once the validation loss saturates.", "Quantizing the gradients to 4-bit to save SRAM."],
        a: 1,
        e: "Freezing early layers reduces the number of gradients that need to be stored in SRAM, making training feasible on MCUs."
    },
    {
        q: "What is the primary trade-off when implementing 'Tiling' (or Patching) for large image inference on edge devices?",
        o: ["It increases accuracy but requires more Flash.", "It reduces peak SRAM usage but increases latency due to overlapping calculations and data movement.", "It eliminates the need for quantization.", "It only works on multi-core processors like the ESP32-P4."],
        a: 1,
        e: "Tiling processes image patches sequentially to save SRAM, but overhead from patch overlaps and re-loading data increases total latency."
    },
    {
        q: "Regarding the ESP32-S3, what is the 'Xtensa LX7' core's theoretical peak MAC throughput per cycle using PIE instructions for INT8?",
        o: ["1 MAC/cycle", "8 MACs/cycle", "16 MACs/cycle", "32 MACs/cycle"],
        a: 1,
        e: "The PIE SIMD instructions on the LX7 can perform 8 Multiply-Accumulate operations in a single cycle for 8-bit data."
    },
    {
        q: "Which metric is the most critical for evaluating the efficiency of a hardware accelerator for Edge AI?",
        o: ["GFLOPS/Watt (Performance per Power)", "Total Flash size", "The version of the TFLite Micro interpreter", "The number of supported Python libraries"],
        a: 0,
        e: "Performance per Watt is the key metric for edge devices where the energy budget is strictly limited."
    },
    {
        q: "What is 'Weight Pruning' and how does it affect the model's structure?",
        o: ["It removes entire layers from the network.", "It sets near-zero weights to exactly zero, creating a sparse weight matrix.", "It reduces the bit-width of all weights to 4-bit.", "It replaces convolution kernels with smaller spatial sizes (e.g., 3x3 to 1x1)."],
        a: 1,
        e: "Pruning introduces sparsity, which can be exploited by specific hardware to reduce both storage and computation."
    },
    {
        q: "In the EEAI ML Workflow, what is 'Sample Partitioning' and why is it used?",
        o: ["Dividing the image into tiles for processing.", "Splitting the dataset into train/test sets based on users/sessions to avoid data leakage.", "Reducing the resolution of input samples.", "Allocating different layers to different MCU cores."],
        a: 1,
        e: "Partitioning by user/session ensures the model is tested on truly unseen data, reflecting real-world generalization."
    }
];

const openPool = [
    { 
        q: "CALCULATION EXERCISE: Given an input volume of 32x32x32, calculate the total MAC operations for a Depthwise Separable Convolution block consisting of: \n1. A Depthwise layer (3x3 kernel, Stride 1, No Padding). \n2. A Pointwise layer (1x1 kernel, 64 filters). \nDetail your derivation for both sub-layers.", 
        a: "1. Output Dimensions: (32 - 3 + 1) = 30x30.\n2. Depthwise MACs: (Kernel_H * Kernel_W * 1) * (Output_H * Output_W * Input_Channels) = (3 * 3 * 1) * (30 * 30 * 32) = 259,200.\n3. Pointwise MACs: (1 * 1 * Input_Channels) * (Output_H * Output_W * Output_Filters) = (1 * 1 * 32) * (30 * 30 * 64) = 1,843,200.\nTotal MACs: 259,200 + 1,843,200 = 2,102,400 MACs.", 
        pts: 5 
    },
    { 
        q: "THEORETICAL ANALYSIS: Explain why a 32-bit integer accumulator is typically used during the inference of an 8-bit quantized neural network. Discuss the relationship with the Scaling Factor (S) and the prevention of precision loss.", 
        a: "The product of two 8-bit integers results in a 16-bit value. Summing these products (as in a MAC) can quickly exceed 16 bits. A 32-bit accumulator provides the necessary headroom to prevent overflow and preserve the precision of the resulting sum before it is re-scaled and back-quantized to 8 bits for the next layer.", 
        pts: 5 
    },
    { 
        q: "SYSTEM DESIGN: You are tasked with deploying a 'Human Activity Recognition' model on an ESP32-S3 (512KB SRAM). If the original model occupies 1.5MB of weights and 800KB of peak activation memory, propose three specific optimizations to fit the model within the SRAM limits.", 
        a: "1. Apply INT8 Quantization: Reduces weight size to ~375KB and peak activations to ~200KB.\n2. Layer Streaming/Tiling: Process segments of the feature map sequentially to keep the peak SRAM demand below 512KB.\n3. Architecture Refactoring: Replace standard convolutions with Depthwise Separable ones to reduce both weight storage and MACs.", 
        pts: 5 
    },
    {
        q: "EXERCISE: Derive the total parameter count for a Fire Module with: Squeeze(1x1, 16 filters) and Expand(1x1, 64 filters + 3x3, 64 filters). The input has 128 channels. Show all intermediate steps.",
        a: "1. Squeeze: (1*1*128 + 1) * 16 = 2,064 params.\n2. Expand 1x1: (1*1*16 + 1) * 64 = 1,088 params.\n3. Expand 3x3: (3*3*16 + 1) * 64 = 9,280 params.\nTotal: 2,064 + 1,088 + 9,280 = 12,432 parameters.",
        pts: 5
    },
    {
        q: "TECHNICAL COMPARISON: Compare SqueezeNet and MobileNetV1 architectures. Focus on their primary mechanisms for reducing parameters and discuss which one is more 'MAC-efficient' for a given number of filters.",
        a: "SqueezeNet focuses on parameter reduction using 1x1 'Squeeze' layers and concatenating 1x1/3x3 'Expand' layers (Fire Modules). MobileNetV1 focuses on MAC reduction using Depthwise Separable Convolutions. Generally, MobileNet is more MAC-efficient because the depthwise layer drastically reduces the spatial-depth complexity compared to SqueezeNet's standard filters.",
        pts: 5
    },
    {
        q: "EXERCISE: A model is being converted using PTQ. The weight range for a specific layer is [-2.4, 4.2]. Calculate the 'Scale' and 'Zero-Point' for asymmetric INT8 quantization (range [-128, 127]). Show the formulas.",
        a: "1. Range: 4.2 - (-2.4) = 6.6.\n2. Scale (S): Range_FP / Range_INT = 6.6 / (127 - (-128)) = 6.6 / 255 ≈ 0.02588.\n3. Zero-Point (Z): Round( - (Min_FP / S) + Min_INT ) = Round( - (-2.4 / 0.02588) - 128 ) = Round( 92.73 - 128 ) = -35.",
        pts: 5
    }
];
