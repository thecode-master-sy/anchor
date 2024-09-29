import {
	Text,
	View,
	StyleSheet,
	Image,
	Modal,
	TouchableWithoutFeedback,
	FlatList,
	Linking,
	Button,
} from "react-native";
import { styled } from "nativewind";
import { images } from "@/constants";
import { StatusBar } from "expo-status-bar";
import {
	StyledImage,
	StyledSafeArea,
	StyledTouchableOpacity,
	StyledView,
	StyledText,
	StyledFlatlist,
} from "@/components/native-wind-components";
import icons from "@/constants/icons";
import { useState, useEffect } from "react";
import OrderedList from "@/components/ordered-list";
import { Audio } from "expo-av";

const earningsList = [
	"Once you get Registered, you receive an Enrollment Cashback of ₦5,000, which you can withdraw anytime.",
	"You can do the Daily TikTok Social Job to get an extra ₦1,200 daily.",
	"You can play Anchor games and win up to ₦25,000 weekly.",
	"You can participate in daily Spillover Earnings, daily Anchor Tenacious Rewards, Spin to Win, and Weekly TikTok challenge to win amazing prizes 😍",
];

const anchorList = [
	"For Engaging on TikTok and Facebook posts to earn ₦1,200 every day.",
	"Performing Simple social Tasks",
	" Working Advert Jobs for Foreign brands to earn every week.",
];

export default function HomeScreen() {
	const [selectedPackage, setSelectedPackage] = useState("silver");
	const [modalVisible, setModalVisible] = useState(false);
	const [howItWorksModalVisible, setHowItWorksModalVisible] = useState(false);
	const [sound, setSound] = useState<Audio.Sound | null>(null);

	async function playSound() {
		const { sound } = await Audio.Sound.createAsync(
			require("../assets/audio/sound.mp3"),
			{
				shouldPlay: true,
				isLooping: true,
			}
		);
		setSound(sound);

		await sound.playAsync();
	}

	useEffect(() => {
		playSound();

		return () => {
			if (sound) {
				sound.unloadAsync();
			}
		};
	}, []);

	return (
		<StyledFlatlist
			className="bg-background relative"
			data={[{}]}
			renderItem={() => (
				<>
					<StyledView className="relative">
						<StyledImage
							source={images.gradientlayer}
							className="absolute top-0 right-0 w-[300px] h-[400px]"
						/>
					</StyledView>
					<StyledSafeArea>
						<StyledView className="px-7 flex-row justify-between items-center">
							<StyledImage
								source={images.logo}
								className="w-[150px] aspect-[1/1.5]"
								resizeMode="contain"
							/>
							<StyledTouchableOpacity
								className="bg-white px-4 flex-row items-center justify-center gap-x-2 rounded-full h-10"
								onPress={() => setModalVisible(true)}
							>
								<StyledImage
									source={icons.register}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-md font-spacemonoregular font-bold">
									Register
								</StyledText>
							</StyledTouchableOpacity>
						</StyledView>

						<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => setModalVisible(false)}
						>
							<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
								<StyledView className="flex-1 justify-end bg-gray-800/10">
									<StyledView className="bg-background p-5 rounded-t-xl rounded-b-xl">
										<StyledTouchableOpacity
											className="absolute top-4 right-4"
											onPress={() => setModalVisible(false)}
										>
											<StyledText className="text-lg font-bold">
												Cancel
											</StyledText>
										</StyledTouchableOpacity>
										<StyledText className="text-3xl font-bold text-white">
											Get Registered Now!
										</StyledText>
										<StyledText className="mt-2 text-base text-white">
											Message our Verified Agent on whatsapp for your Benefix
											Registration
										</StyledText>
										<StyledView className="items-start mt-7">
											<StyledTouchableOpacity
												onPress={() =>
													Linking.openURL("https://wa.link/e9hw63")
												}
												className="bg-red-800 px-4 py-4 rounded-full flex-row items-center gap-x-2"
											>
												<StyledText className="text-white font-spacemonoregular font-bold text-base">
													Click here
												</StyledText>
												<StyledImage
													source={icons.direction}
													resizeMode="contain"
													className="w-5 h-5"
												/>
											</StyledTouchableOpacity>
										</StyledView>
										<StyledView className="mt-4">
											<StyledText className="text-white text-base">
												it is also important for you to join our verified social
												handles for more information on how Anchor works
											</StyledText>
										</StyledView>
										<StyledView className="flex-row gap-x-2 items-center justify-center mt-4">
											<StyledTouchableOpacity
												onPress={() =>
													Linking.openURL("https://wa.link/e9hw63")
												}
												className="bg-secondary p-4 border border-gray-500 rounded-lg"
											>
												<StyledImage
													source={icons.whatsapp}
													className="w-[30px] h-[30px]"
													resizeMode="contain"
												/>
											</StyledTouchableOpacity>
											<StyledView className="bg-secondary p-4 border border-gray-500 rounded-lg">
												<StyledImage
													source={icons.telegram}
													className="w-[30px] h-[30px]"
													resizeMode="contain"
												/>
											</StyledView>
											<StyledView className="bg-secondary p-4 border border-gray-500 rounded-lg">
												<StyledImage
													source={icons.tiktok}
													className="w-[30px] h-[30px]"
													resizeMode="contain"
												/>
											</StyledView>
											<StyledView className="bg-secondary p-4 border border-gray-500 rounded-lg">
												<StyledImage
													source={icons.usergroup}
													className="w-[30px] h-[30px]"
													resizeMode="contain"
												/>
											</StyledView>
										</StyledView>
										<StyledText className="text-white mt-4">
											Follow our backup account for more info on anchor
										</StyledText>
									</StyledView>
								</StyledView>
							</TouchableWithoutFeedback>
						</Modal>

						<StyledView className="w-full h-[370px] px-7  mt-20 relative">
							<StyledImage
								source={images.anchorme}
								className="w-full h-full rounded-xl"
								resizeMode="cover"
							/>

							<StyledTouchableOpacity
								className="bg-background absolute bottom-8 left-12 px-4 py-4 rounded-full flex-row items-center gap-x-2"
								onPress={() => setHowItWorksModalVisible(true)}
							>
								<StyledText className="text-white font-spacemonoregular">
									How it works
								</StyledText>
								<StyledImage
									source={icons.direction}
									resizeMode="contain"
									className="w-5 h-5"
								/>
							</StyledTouchableOpacity>

							<Modal
								animationType="slide"
								transparent={true}
								visible={howItWorksModalVisible}
								onRequestClose={() => setHowItWorksModalVisible(false)}
							>
								<TouchableWithoutFeedback
									onPress={() => setHowItWorksModalVisible(false)}
								>
									<StyledView className="flex-1 justify-end bg-gray-800/10">
										<StyledView className="bg-background p-5 rounded-t-xl rounded-b-xl">
											<StyledTouchableOpacity
												className="absolute top-4 right-4"
												onPress={() => setHowItWorksModalVisible(false)}
											>
												<StyledText className="text-lg font-bold text-white">
													Cancel
												</StyledText>
											</StyledTouchableOpacity>
											<StyledText className="text-3xl font-bold text-white">
												How It Works
											</StyledText>
											<StyledText className="text-base text-white">
												Anchor is simply a Smart online job/ social advert
												business that pays every week, for doing these👇🏽👇🏽
											</StyledText>

											<OrderedList data={anchorList} />

											<StyledView>
												<StyledText className="text-white text-base">
													The best part is that Anchor Has Partnered with
													FaceBook, Instagram and TikTok so that you can
													Monetise their social media accounts and get paid
													every week.. You can make as much as ₦60,000 or more
													every week once you register on Anchor.... And all you
													need for Anchor is your WhatsApp, or any other social
													media accounts you have... (Referral is Optional 💯)
												</StyledText>
											</StyledView>

											<StyledTouchableOpacity
												className="mt-4 rounded-full px-4 py-4 bg-white items-center justify-center"
												onPress={() => setModalVisible(true)}
											>
												<StyledText className="text-base font-bold">
													Click here to Register
												</StyledText>
											</StyledTouchableOpacity>
										</StyledView>
									</StyledView>
								</TouchableWithoutFeedback>
							</Modal>
						</StyledView>

						<StyledView className="mt-14 px-7">
							<StyledText className="text-header text-5xl font-bold uppercase">
								Who
							</StyledText>
							<StyledText className="text-header text-5xl font-bold uppercase">
								Are We?
							</StyledText>

							<StyledView className="px-7 py-10 bg-secondary mt-4 rounded-3xl border border-gray-100">
								<StyledText className="text-white text-base">
									<Text style={{ color: "red" }}>Anchor</Text> Originally
									represents something that brings stability, support and that
									can be relied upon. Anchor is a universal framework that
									connects globally continously and was set up afer series of
									serial entrepreneusrs with experience and expertise came up
									with a framework that would help in providing finacial and non
									finacial suport and stability. On Anchor, We provide services
									that would help various users across the continent in ensuring
									that their internet and online presence is not taken as a
									waste of time.
								</StyledText>

								<StyledView className="mt-7 p-2 bg-secondary-100 rounded-xl">
									<StyledText className="text-white font-bold text-base">
										On Anchor, our users welfare is always a top poirity.
									</StyledText>
								</StyledView>
							</StyledView>
						</StyledView>

						<StyledView className="mt-14 flex justify-center items-center px-7">
							<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150x] flex-row gap-x-2 items-center">
								<StyledImage
									source={icons.countdown}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-white text-base font-bold">
									Waitlist
								</StyledText>
							</StyledTouchableOpacity>

							<StyledView className="px-7 py-10 bg-secondary mt-7 rounded-3xl border border-gray-100">
								<StyledText className="text-white text-3xl font-bold">
									Register Now!
								</StyledText>

								<StyledText className="text-white mt-4 text-base">
									Be the first to experience the future of connectivity and
									innovation. By joining our waitlist, you'll gain exclusive
									access to our latest updates and insights. click on the button
									below to get started and be a part of something extraordinary
								</StyledText>

								<StyledTouchableOpacity
									className="mt-4 rounded-full px-4 py-4 bg-white items-center justify-center"
									onPress={() => setModalVisible(true)}
								>
									<StyledText className="text-base font-bold">
										Click here to Register
									</StyledText>
								</StyledTouchableOpacity>
							</StyledView>
						</StyledView>

						<StyledView className="mt-14 items-center justify-center">
							<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
								<StyledImage
									source={icons.countdown}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-white text-base font-bold">
									What you would get
								</StyledText>
							</StyledTouchableOpacity>

							<StyledImage
								source={images.masteryClass}
								className="w-full h-[370px] mt-7"
								resizeMode="cover"
							/>

							<StyledView className="px-7 py-10 bg-secondary mt-7 rounded-3xl border border-gray-100">
								<StyledText className="text-white text-xl font-bold">
									Here's how you can earn on Anchor, once you get Registered
								</StyledText>
								<OrderedList data={earningsList} />

								<StyledText className="text-white text-base">
									WITHRAWAL IS THREE TIMES A WEEK WITH MINIMUM OF ₦10,000 Now,
									Registration fee is a One-time payment of ₦6,000.... AND AFTER
									REGISTRATION, YOU WILL GET ADDED TO THE VIP GROUP WHERE I'LL
									TEACH YOU HOW TO MAKE ₦60K to ₦80K WEEKLY
								</StyledText>

								<StyledTouchableOpacity
									className="mt-4 rounded-full px-4 py-4 bg-white items-center justify-center"
									onPress={() => setModalVisible(true)}
								>
									<StyledText className="text-base font-bold">
										Click here to Register
									</StyledText>
								</StyledTouchableOpacity>
							</StyledView>
						</StyledView>

						<StyledView className="mt-14 items-center justify-center">
							<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
								<StyledImage
									source={icons.countdown}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-white text-base font-bold">
									We are multinational
								</StyledText>
							</StyledTouchableOpacity>

							<StyledImage
								source={images.multinational}
								className="w-full h-[370px] mt-7"
								resizeMode="cover"
							/>
						</StyledView>

						<StyledView className="mt-14">
							<StyledView className="items-center justify-center">
								<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
									<StyledImage
										source={icons.countdown}
										className="w-[20px] h-[20px]"
										resizeMode="contain"
									/>
									<StyledText className="text-white text-base font-bold">
										Earning Graph
									</StyledText>
								</StyledTouchableOpacity>
							</StyledView>

							<StyledView className="mt-14">
								<StyledView className="justify-center items-center flex-row gap-x-4">
									<StyledTouchableOpacity
										className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center"
										onPress={() => setSelectedPackage("silver")} // Set selected package to silver
									>
										<StyledText className="text-white text-base font-bold">
											Silver Package
										</StyledText>
									</StyledTouchableOpacity>

									<StyledTouchableOpacity
										className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center"
										onPress={() => setSelectedPackage("pro")} // Set selected package to pro
									>
										<StyledText className="text-white text-base font-bold">
											Pro Package
										</StyledText>
									</StyledTouchableOpacity>
								</StyledView>

								<StyledView className="mt-14">
									<StyledImage
										source={
											selectedPackage == "silver"
												? images.silverPackage
												: images.proPackage
										}
										className="w-full h-[400px]"
										resizeMode="cover"
									/>
								</StyledView>
							</StyledView>
						</StyledView>

						<StyledView className="mt-14 items-center justify-center">
							<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
								<StyledImage
									source={icons.countdown}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-white text-base font-bold">
									We are registered
								</StyledText>
							</StyledTouchableOpacity>

							<StyledImage
								source={images.registered}
								className="w-full h-[370px] mt-7"
								resizeMode="cover"
							/>
							<StyledView className="px-7 mt-7">
								<StyledView className=" py-2 px-4 bg-secondary-100 rounded-xl">
									<StyledText className="text-white font-bold text-base">
										Anchor is registered and is safe for every user
									</StyledText>
								</StyledView>
							</StyledView>
						</StyledView>

						<StyledView className="mt-14 items-center justify-center">
							<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
								<StyledImage
									source={icons.countdown}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-white text-base font-bold">
									Roadmap to stability and connection.
								</StyledText>
							</StyledTouchableOpacity>

							<StyledImage
								source={images.roadmap}
								className="w-full h-[370px] mt-7"
								resizeMode="cover"
							/>

							<StyledView className="mt-7 px-7">
								<StyledView className=" py-2 bg-secondary-100 rounded-xl px-4">
									<StyledText className="text-white font-bold text-base">
										Anchor is registered and is safe for every user. Our
										commitment to security ensures that your data is protected
										with the highest standards. We prioritize transparency and
										user trust, providing regular updates and insights into our
										operations. Join us in building a reliable and innovative
										platform that empowers users across the globe.
									</StyledText>
								</StyledView>
							</StyledView>
						</StyledView>

						<StyledView className="mt-14 justify-center items-center">
							<StyledTouchableOpacity className="bg-secondary border border-gray-500 rounded-full justify-center px-4 py-2 min-w-[150px] flex-row gap-x-2 items-center">
								<StyledImage
									source={icons.countdown}
									className="w-[20px] h-[20px]"
									resizeMode="contain"
								/>
								<StyledText className="text-white text-base font-bold">
									Join Us
								</StyledText>
							</StyledTouchableOpacity>

							<StyledView className="flex-row gap-x-2 mt-7">
								<StyledTouchableOpacity
									onPress={() => Linking.openURL("https://wa.link/e9hw63")}
									className="bg-secondary p-4 border border-gray-500 rounded-lg"
								>
									<StyledImage
										source={icons.whatsapp}
										className="w-[30px] h-[30px]"
										resizeMode="contain"
									/>
								</StyledTouchableOpacity>
								<StyledView className="bg-secondary p-4 border border-gray-500 rounded-lg">
									<StyledImage
										source={icons.telegram}
										className="w-[30px] h-[30px]"
										resizeMode="contain"
									/>
								</StyledView>
								<StyledView className="bg-secondary p-4 border border-gray-500 rounded-lg">
									<StyledImage
										source={icons.tiktok}
										className="w-[30px] h-[30px]"
										resizeMode="contain"
									/>
								</StyledView>
								<StyledView className="bg-secondary p-4 border border-gray-500 rounded-lg">
									<StyledImage
										source={icons.usergroup}
										className="w-[30px] h-[30px]"
										resizeMode="contain"
									/>
								</StyledView>
							</StyledView>
						</StyledView>

						<StyledView className="items-center justify-center">
							<StyledImage
								source={images.logo}
								className="w-[150px] h-[150px]"
								resizeMode="contain"
							/>
						</StyledView>

						<StyledView className="items-center justify-center">
							<StyledText className="text-white text-center text-base">
								All rights reserved @Anchor 2024
							</StyledText>
						</StyledView>

						<StatusBar translucent backgroundColor="transparent" />
					</StyledSafeArea>
				</>
			)}
			keyExtractor={(item, index) => index.toString()}
			showsVerticalScrollIndicator={false}
		/>
	);
}
