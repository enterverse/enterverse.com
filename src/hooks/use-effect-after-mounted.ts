import React from "react";

export function useEffectAfterMounted(
	effect: React.EffectCallback,
	deps?: React.DependencyList
) {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		if (mounted) {
			return effect();
		}
		setMounted(true);
	}, deps);
}
