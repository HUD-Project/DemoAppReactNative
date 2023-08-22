import { Dispatch, SetStateAction } from "react";
import Settings from "./screens/Settings";

interface Props {
	xEnabled: Dispatch<SetStateAction<boolean>>;
	yEnabled: Dispatch<SetStateAction<boolean>>;
	sliderVal: Dispatch<SetStateAction<number>>;
}

const SettingsWrapper = ({ xEnabled, yEnabled, sliderVal }: Props) => {
	return (
		<Settings
			xEnabled={xEnabled}
			yEnabled={yEnabled}
			sliderVal={sliderVal}
		/>
	);
};

export default SettingsWrapper;
